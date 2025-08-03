import mongoose from 'mongoose';

const slotDaySchema = new mongoose.Schema({
  day: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    required: true,
  },
  startTime: {
    type: String, // Format: '09:00 AM'
    required: true,
  },
  endTime: {
    type: String, // Format: '05:00 PM'
    required: true,
  },
});

const doctorSlotSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
    unique: true,
  },
  weeklySlots: [slotDaySchema],
  appointmentFee: {
    type: Number,
    default: 0,
  },
  dailyPatientLimit: {
    type: Number,
  },
  SheduleIrregularOff: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const DoctorSlot = mongoose.model('DoctorSlot', doctorSlotSchema);
