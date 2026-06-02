const express = require('express');
const VideoCall = require('../models/VideoCall');
const CallCost = require('../models/CallCost');
const User = require('../models/User');
const Transaction = require('../models/Transaction');
const auth = require('../middleware/auth');

const router = express.Router();

// Initiate video call
router.post('/initiate', auth, async (req, res) => {
  try {
    const { receiverId, callType = 'video', quality = 'medium' } = req.body;

    const receiver = await User.findById(receiverId);
    if (!receiver) {
      return res.status(404).json({ error: 'Receiver not found' });
    }

    const caller = await User.findById(req.user._id);
    if (caller.coins < 2) {
      return res.status(400).json({ error: 'Insufficient coins for call' });
    }

    const roomId = Math.random().toString(36).substring(7) + Date.now();
    const videoCall = new VideoCall({
      caller: req.user._id,
      receiver: receiverId,
      status: 'incoming',
      callType,
      quality,
      roomId,
      coinsPerMinute: callType === 'video' ? 2 : 1
    });

    await videoCall.save();
    await videoCall.populate('caller', 'username avatar');

    res.status(201).json({
      message: 'Call initiated',
      videoCall,
      roomId
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Answer video call
router.post('/:callId/answer', auth, async (req, res) => {
  try {
    const videoCall = await VideoCall.findById(req.params.callId);
    if (!videoCall) {
      return res.status(404).json({ error: 'Call not found' });
    }

    if (videoCall.receiver.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    videoCall.status = 'ongoing';
    videoCall.startTime = new Date();
    await videoCall.save();

    res.json({
      message: 'Call answered',
      videoCall
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Decline video call
router.post('/:callId/decline', auth, async (req, res) => {
  try {
    const videoCall = await VideoCall.findById(req.params.callId);
    if (!videoCall) {
      return res.status(404).json({ error: 'Call not found' });
    }

    if (videoCall.receiver.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    videoCall.status = 'declined';
    await videoCall.save();

    res.json({ message: 'Call declined', videoCall });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// End video call
router.post('/:callId/end', auth, async (req, res) => {
  try {
    const videoCall = await VideoCall.findById(req.params.callId);
    if (!videoCall) {
      return res.status(404).json({ error: 'Call not found' });
    }

    const isCaller = videoCall.caller.toString() === req.user._id.toString();
    if (!isCaller) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    if (videoCall.status !== 'ongoing') {
      return res.status(400).json({ error: 'Call is not ongoing' });
    }

    const endTime = new Date();
    const durationInSeconds = Math.floor((endTime - videoCall.startTime) / 1000);
    const durationInMinutes = Math.ceil(durationInSeconds / 60);
    const totalCoinsDeducted = durationInMinutes * videoCall.coinsPerMinute;

    const caller = await User.findByIdAndUpdate(
      videoCall.caller,
      { $inc: { coins: -totalCoinsDeducted } },
      { new: true }
    );

    if (caller.coins < 0) {
      await User.findByIdAndUpdate(
        videoCall.caller,
        { $inc: { coins: totalCoinsDeducted } }
      );
      return res.status(400).json({ error: 'Insufficient coins' });
    }

    const callCost = new CallCost({
      user: videoCall.caller,
      videoCall: videoCall._id,
      callType: videoCall.callType,
      duration: durationInSeconds,
      coinsPerMinute: videoCall.coinsPerMinute,
      totalCoins: totalCoinsDeducted,
      status: 'completed'
    });
    await callCost.save();

    const transaction = new Transaction({
      user: videoCall.caller,
      type: 'usage',
      amount: 0,
      coins: -totalCoinsDeducted,
      description: `${videoCall.callType} call for ${durationInMinutes} minute(s)`,
      status: 'completed'
    });
    await transaction.save();

    videoCall.status = 'completed';
    videoCall.endTime = endTime;
    videoCall.duration = durationInSeconds;
    videoCall.totalCoinsDeducted = totalCoinsDeducted;
    await videoCall.save();

    res.json({
      message: 'Call ended',
      videoCall,
      callDuration: { seconds: durationInSeconds, minutes: durationInMinutes },
      coinsDeducted: totalCoinsDeducted,
      remainingCoins: caller.coins
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get call history
router.get('/history', auth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const calls = await VideoCall.find({
      $or: [{ caller: req.user._id }, { receiver: req.user._id }]
    })
      .populate('caller', 'username avatar')
      .populate('receiver', 'username avatar')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await VideoCall.countDocuments({
      $or: [{ caller: req.user._id }, { receiver: req.user._id }]
    });

    res.json({
      calls,
      pagination: { total, page, limit, pages: Math.ceil(total / limit) }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get call statistics
router.get('/stats', auth, async (req, res) => {
  try {
    const totalCalls = await VideoCall.countDocuments({
      $or: [{ caller: req.user._id }, { receiver: req.user._id }]
    });

    const completedCalls = await VideoCall.countDocuments({
      $or: [{ caller: req.user._id }, { receiver: req.user._id }],
      status: 'completed'
    });

    const totalDuration = await VideoCall.aggregate([
      {
        $match: {
          $or: [{ caller: req.user._id }, { receiver: req.user._id }],
          status: 'completed'
        }
      },
      { $group: { _id: null, total: { $sum: '$duration' } } }
    ]);

    const coinsSpent = await CallCost.aggregate([
      { $match: { user: req.user._id, status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$totalCoins' } } }
    ]);

    res.json({
      totalCalls,
      completedCalls,
      missedCalls: await VideoCall.countDocuments({
        receiver: req.user._id,
        status: 'missed'
      }),
      totalDurationSeconds: totalDuration[0]?.total || 0,
      totalCoinsSpent: coinsSpent[0]?.total || 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;