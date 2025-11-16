const mongoose = require("mongoose");

const WithdrawalRequestSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 1
    },
    method: {
        type: String,
        enum: ["bank", "upi", "paypal"],
        default: "upi",
        required: true
    },
    details: {
        type: Object, // depending on method
        /**
         * Example:
         * { upiId: "doctor@upi" }
         * { bankAccount: "1234567890", ifsc: "SBIN0001234", holderName: "Dr. Ravi" }
         * { paypalEmail: "doctor@example.com" }
         */
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected", "paid"],
        default: "pending"
    },
    transactionId: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Auto-update updatedAt on save
WithdrawalRequestSchema.pre("save", function (next) {
    this.updatedAt = new Date();
    next();
});

 
export const WithdrawalRequest = mongoose.model('WithdrawalRequest', WithdrawalRequestSchema);
