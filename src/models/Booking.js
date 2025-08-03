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
    type: String, // Consider changing to Date type if you're storing real dates
    required: true,
  },
  time: {
    type: String, // e.g., "10:00 AM"
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending',
  },
  firstName: String,
  lastName: String,
  dob: String,
  age: Number,
  gender: String,
  healthConcern: String,
  phone: String,
  city: String,
  state: String,
  address: String,
}, {
  timestamps: true,
});

// ✅ ES6 named export
export const Booking = mongoose.model('Booking', bookingSchema);
