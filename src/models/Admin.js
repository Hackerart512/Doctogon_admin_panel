import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});


export const Admin = mongoose.model('Admin', userSchema);
