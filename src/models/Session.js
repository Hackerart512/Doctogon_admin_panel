import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  conversationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conversation',
    required: true,
  },
  type: {
    type: String,
    enum: ['chat', 'voice', 'video'],
    required: true,
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
  endTime: {
    type: Date,
  },
  coinsUsed: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['active', 'ended'],
    default: 'active',
  },
}, { timestamps: true });

export const Session = mongoose.model('Session', sessionSchema);
