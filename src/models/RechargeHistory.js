import mongoose from 'mongoose';

const RechargeHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    convenience_fee :{
        type: Number,
    },
    coins: Number,
    cash: Number,
    invoiceNumber: String,
    orderId: String,
    paymentId: String,
    signature: String,
    paymentMode: {
        type: String,
        enum: ['Razorpay', 'COD'],
        default: 'Razorpay'
    },
    status: {
        type: String,
        enum: ['Pending', 'Success', 'Failed'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const RechargeHistory = mongoose.model('RechargeHistory', RechargeHistorySchema);
