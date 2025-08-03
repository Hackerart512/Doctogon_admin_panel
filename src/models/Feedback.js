import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  feedback: {
    type: String,
    required: true,
    trim: true,
  },
  hearts: {
    type: Number,
    required: true,
    min: 0,
  },
  totalAmount: {
    type: Number,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

export const Feedback = mongoose.model('Feedback', feedbackSchema);
