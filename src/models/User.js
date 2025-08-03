import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    enum: ['Doctor', 'Patient', 'Admin', 'Researcher'],
  },
  otp: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  registrationNumber: {
    type: String,
  },

  // Profile
  profile: {
    profilePic: String,
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    dob: Date,
    language: [String],
    city: String,
    state: String,
    address: String,
  },

  // Health Assessment
  healthAssessment: {
    bloodType: String,
    rh: String,
    allergies: String,
    chronicCondition: String,
    height: String,
    weight: String,
    systolicBloodPressure: String,
    diastolicBloodPressure: String,
  },

  // Lifestyle
  lifeStyleInformation: {
    smoking: String,
    alcohol: String,
    activityLevel: String,
  },

  isProfileComplete: {
    type: Boolean,
    default: false,
  },

  notificationSetting: {
    messages: { type: Boolean, default: true },
    testResult: { type: Boolean, default: true },
    bookingUpdate: { type: Boolean, default: true },
    medicationReminder: { type: Boolean, default: true },
    appointmentReminder: { type: Boolean, default: true },
    newPrescriptionReminder: { type: Boolean, default: true },
  },

  favorites: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ],

  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
}, {
  timestamps: true,
});

// ✅ ES6 Named Export
export const User = mongoose.model('User', userSchema);
