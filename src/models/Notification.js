import mongoose from 'mongoose';

const { Schema } = mongoose;

const notificationSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  source: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt automatically
});

export const Notification = mongoose.model('Notification', notificationSchema);
