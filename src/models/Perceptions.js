import mongoose from 'mongoose';

const { Schema } = mongoose;

const PerceptionSchema = new  Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },     // Patient
    DoctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Doctor
    PerceptionTitle: String,
    fileUrl: String,
    description: String,
}, { timestamps: true });
 
export const Perceptions = mongoose.model('Perceptions', PerceptionSchema);