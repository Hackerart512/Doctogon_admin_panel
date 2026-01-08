import mongoose from 'mongoose';

const { Schema } = mongoose;

const faqSchema = new Schema({
    question: {
        type: String,
        required: true,
        trim: true
    },
    answer: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const FAQ = mongoose.model('FAQ', faqSchema);