import mongoose from 'mongoose';

const collegeSchema = new mongoose.Schema({
  degree: {
    type: String,
    enum: ['BAMS', 'BDS', 'BHMS', 'BUMS', 'MBBS'],
    required: true,
  },
  colleges: [
    {
      name: { type: String, required: true },
    },
  ],
});

export const College = mongoose.model('College', collegeSchema);
