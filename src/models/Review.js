import mongoose from 'mongoose';

const { Schema } = mongoose;

const reviewSchema = new Schema({
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
  },
}, {
  timestamps: true,
});

export const Review = mongoose.model('Review', reviewSchema);
