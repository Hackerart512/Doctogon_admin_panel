const mongoose = require("mongoose");

const GeneralSettingsSchema = new mongoose.Schema({
    gstRate: {
        type: Number,
        default: 18,
    },
    adminCommissionPercent: {
        type: Number,
        default: 10,
    },
    active: {
        type: Boolean,
        default: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
 
export const GeneralSetting = mongoose.model('GeneralSettings', GeneralSettingsSchema);
