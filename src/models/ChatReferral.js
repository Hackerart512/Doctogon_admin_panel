const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    fromDoctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    toDoctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    createdAt: { type: Date, default: Date.now }
});
 
export const ChatReferral = mongoose.model('chatReferral', referralSchema);