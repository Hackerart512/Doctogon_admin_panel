import mongoose from 'mongoose';

const { Schema } = mongoose;

const referralSchema = new  Schema({
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