const mongoose = require('mongoose');

const callCostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  videoCall: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VideoCall',
    required: true
  },
  callType: {
    type: String,
    enum: ['video', 'audio'],
    required: true
  },
  duration: Number,
  coinsPerMinute: Number,
  totalCoins: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'refunded'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

callCostSchema.index({ user: 1, createdAt: -1 });

module.exports = mongoose.model('CallCost', callCostSchema);