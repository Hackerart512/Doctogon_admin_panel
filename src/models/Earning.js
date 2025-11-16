import mongoose from 'mongoose';

const { Schema } = mongoose;

const earningSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    source: {
        type: String,
        enum: ["referral", "chat", "video", "voice"],
        default: "other",
    },

    referenceId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "referenceModel",
    },
    referenceModel: {
        type: String,
        enum: ["Order", "Booking", "Transaction"],
    },

    // Amount earned
    cash: {
        type: Number,
        required: true,
        min: 0,
    },

    coin: {
        type: Number,
        min: 0,
    },

    // Auto timestamps
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

earningSchema.pre("save", function (next) {
    this.updatedAt = new Date();
    next();
});

 
export const Earning = mongoose.model('Earning', earningSchema);