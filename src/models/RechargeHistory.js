import mongoose from 'mongoose';

const RechargeHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  coins: Number,
  amount: Number, // ₹
  razorpayPaymentId: String,
  status: {
    type: String,
    enum: ['Pending', 'Success', 'Failed'],
    default: 'Success',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const RechargeHistory = mongoose.model('RechargeHistory', RechargeHistorySchema);
