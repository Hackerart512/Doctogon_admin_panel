const mongoose = require('mongoose');

const CashUsageSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    purpose: {
        type: String,
        enum: ['chat', 'video', 'voice', 'other'],
        required: true
    },
    cashUsed: {
        type: Number,
        required: true
    },
    baseCommission: {
        type: Number,
        default: 0
    },
    gstAmount: {
        type: Number,
        default: 0
    },
    commisionAmount: {
        type: Number,
        default: 0
    },
    doctorEarning: {
        type: Number,
        default: 0
    },
    usedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

export const CashUsage = mongoose.model('CashUsage', CashUsageSchema);
