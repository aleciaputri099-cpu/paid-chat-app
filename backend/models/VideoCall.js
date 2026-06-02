const mongoose = require('mongoose');

const videoCallSchema = new mongoose.Schema({
  caller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['incoming', 'ongoing', 'completed', 'missed', 'declined'],
    default: 'incoming'
  },
  startTime: Date,
  endTime: Date,
  duration: {
    type: Number,
    default: 0
  },
  coinsPerMinute: {
    type: Number,
    default: 2
  },
  totalCoinsDeducted: {
    type: Number,
    default: 0
  },
  quality: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  callType: {
    type: String,
    enum: ['video', 'audio'],
    default: 'video'
  },
  roomId: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

videoCallSchema.index({ caller: 1, createdAt: -1 });
videoCallSchema.index({ receiver: 1, createdAt: -1 });
videoCallSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('VideoCall', videoCallSchema);