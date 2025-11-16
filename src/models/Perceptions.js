const mongoose = require('mongoose');

const PerceptionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },     // Patient
    DoctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Doctor
    PerceptionTitle: String,
    fileUrl: String,
    description: String,
}, { timestamps: true });
 
export const Perceptions = mongoose.model('Perceptions', PerceptionSchema);