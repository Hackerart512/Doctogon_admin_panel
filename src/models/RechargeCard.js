const mongoose = require("mongoose");

const RechargeCardSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true, // e.g., "100 Coins Pack"
        },

        price: {
            type: Number,
            required: true, // e.g., 200 (₹)
        },

        cash: {
            type: Number,
            required: true, // e.g., 100 cash
        },

        coin:{
            type: Number,
            required: true, // e.g., 50 copik
        },

        description: {
            type: String,
            default: "",
        },

        isActive: {
            type: Boolean,
            default: true, // can disable the pack temporarily
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            default: null,
        },
    },
    { timestamps: true }
);

export const RechargeCard  = mongoose.model("RechargeCard", RechargeCardSchema);
