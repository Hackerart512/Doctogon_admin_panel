import mongoose from 'mongoose';

const { Schema } = mongoose;


const bookingSchema = new Schema({
  doctorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  patientId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: String, // or Date
    required: true,
  },
  time: {
    type: String, // e.g., "10:00 AM"
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dob: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  healthConcern: {
    type: String,
  },
  phone: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  address: {
    type: String,
  },
}, {
  timestamps: true
});

// ✅ ES6 named export
export const Booking = mongoose.model('Booking', bookingSchema);
