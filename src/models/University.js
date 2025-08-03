import mongoose from 'mongoose';

const { Schema } = mongoose;

const universitySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
}, {
  timestamps: true,
});

export const University = mongoose.model('University', universitySchema);
