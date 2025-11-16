import mongoose from 'mongoose';

const { Schema } = mongoose;

const MessageSchema = new Schema({
    conversationId: {
        type: String
    },
    senderId: {
        type: String
    },
    receiverId: {
        type: String
    },
    text: {
        type: String
    },
    type: {
        type: String,
        enum: ['Text', 'Image', 'File'],
    },
    language: {
        type: String
    }
},
    {
        timestamps: true
    })

export const Message = mongoose.model('Message', MessageSchema);
