import mongoose from 'mongoose';

const { Schema } = mongoose;


const AyushCouncilSchema = new Schema({
    council: {
        type: String, 
        required: true,
    },
    state: {
        type: String,  
        required: true,
    }, 
}, {
    timestamps: true
});
 
export const AyushCouncil = mongoose.model('AyushCouncil', AyushCouncilSchema);