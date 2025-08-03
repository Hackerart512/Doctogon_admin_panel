import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema({
  photo: {
    type: String,
  },
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

// ✅ ES6 named export
export const Category = mongoose.model('Category', categorySchema);
