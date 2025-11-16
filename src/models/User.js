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
        enum: ['Doctor', 'Patient', 'Admin', 'Researcher'],
    },
    otp: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    }
    ,emailVerified: {
        type: Boolean,
        default: false
    },
    slfie_otp:{
         type: String
    },
    approved: {
        type: Boolean,
        default: false
    },
    isReview: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },

    registrationNumber: {
        type: String,
    },

    deviceToken :{
        type: String
    },

    // Profile 
    profile: {
        profilePic: {
            type: String
        },
        firstName: {
            type: String,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        dob: {
            type: Date
        },
        language: [{
            type: String
        }],
        city: {
            type: String
        },
        state: {
            type: String
        },
        address: {
            type: String
        }
    },

    // Health Assessment (relevant for patient only)
    healthAssessment: {
        bloodType: {
            type: String
        },
        rh: {
            type: String
        },
        allergies: {
            type: String
        },
        chronicCondition: {
            type: String
        },
        height: {
            type: String
        },
        weight: {
            type: String
        },
        systolicBloodPressure: {
            type: String
        },
        diastolicBloodPressure: {
            type: String
        }
    },

    lifeStyleInformation: {
        smoking: {
            type: String
        },
        alcohol: {
            type: String
        },
        activityLevel: {
            type: String
        },
    },

    isProfileComplete: {
        type: Boolean,
        default:false
    },
    notificationSetting:{
        messages: {
            type: Boolean,
            default:true
        },
        testResult: {
            type: Boolean,
            default:true
        },
        bookingUpdate: {
            type: Boolean,
            default:true
        },
        medicationReminder: {
            type: Boolean,
            default:true
        },
        appointmentReminder: {
            type: Boolean,
            default:true
        },
        newPrescriptionReminder: {
            type: Boolean,
            default:true
        },
    },
    favorites: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    ],
    referralCode: { type: String, unique: true },
    referredBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    referralCount: { type: Number, default: 0 },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
},{
    timestamps: true
});

 
export const User = mongoose.model('User', userSchema);
