import mongoose from 'mongoose';

const paymentIntentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  orderId: String,
  paymentId: String,
  signature: String,
  amount: Number,
  status: {
    type: String,
    enum: ['created', 'paid', 'failed'],
    default: 'created',
  },
  method: String,
}, { timestamps: true });

export const PaymentIntent = mongoose.model('PaymentIntent', paymentIntentSchema);
