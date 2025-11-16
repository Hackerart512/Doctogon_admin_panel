import mongoose from 'mongoose';

const { Schema } = mongoose;

const specialistDoctorSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    specialty: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Specialization',
            required: true
        }
    ],

    specialistInfo: {
        experience: Number,
        hospitalName: String,
        clinicAddress: String,
        bio: String,
        publication: String,
        certification: String,
        working_place: String,
        heart: {
            type: Number,
            default: 0
        },
        instagram: String,
        facebook: String,
        twitter: String,
        linkedin: String
    },

    registrationDetails:{
        council: String,
        other_council: String,
        registrationNumber: String,
        registrationYear: String,
        registrationProofImage: String, //image
        coucilWebsiteLink: String,
        identityProof: String,
        Number: String,
        identityProofImage: String, //image
        identityProofSelfie: String, //image
    },

    bankDetails:{
        PAN:String,
        nameOfPAN:String,
        panImage:String, //image
        accountNumber:String,
        IFSCcode:String,
        bankName:String,
        bank:String,
        lastMonthBankStatement:String, //image
    },

    educationDetails:{
        qualification:String,
        hightestQualification:String,
        collageName:String,
        univercityName:String,
        passingYear:String,
        degree:String, //image
    },

    priceDetails:{
        PricePerMinForChat:String,
        PricePerMinForVideo:String,
        PricePerMinForVoice:String,
        timingOnApp:String,
        availableHours:String,
        codeOfRegistration:String
    },

    availability:{
        onlineStatus:{
            type: Boolean,
            default: true
        },
        futureOnlineDateTime:{
            type:Date
        }
    },

    ratingsAverage: {
        type: Number,
        default: 0
    },
    totalReviews: {
        type: Number,
        default: 0
    },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    friendRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    sentRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},{
    timestamps: true
});


export const SpecialistDoctor = mongoose.model('SpecialistDoctor', specialistDoctorSchema);
