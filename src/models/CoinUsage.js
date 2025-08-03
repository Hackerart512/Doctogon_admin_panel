import mongoose from 'mongoose';

const CoinUsageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  purpose: {
    type: String,
    enum: ['chat', 'video', 'voice', 'other'],
    required: true,
  },
  coinsUsed: {
    type: Number,
    required: true,
  },
  usedAt: {
    type: Date,
    default: Date.now,
  },
});

export const CoinUsage = mongoose.model('CoinUsage', CoinUsageSchema);
