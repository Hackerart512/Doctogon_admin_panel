import mongoose from 'mongoose';

const { Schema } = mongoose;

const specializationSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  }
}, {
  timestamps: true,
});

export const Specialization = mongoose.model('Specialization', specializationSchema);
