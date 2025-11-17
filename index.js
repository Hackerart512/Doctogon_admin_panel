import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import path from 'path';

// Models
import { User } from './src/models/User.js';
import { SpecialistDoctor } from './src/models/SpecialistDoctor.js';
import { Booking } from './src/models/Booking.js';
import { University } from './src/models/University.js';
import { Session } from './src/models/Session.js';
import { Review } from './src/models/Review.js';
import { RechargeHistory } from './src/models/RechargeHistory.js';
import { Notification } from './src/models/Notification.js';
import { Location } from './src/models/Location.js';
import { Feedback } from './src/models/Feedback.js';
import { DoctorSlot } from './src/models/DoctorSlot.js';
import { College } from './src/models/College.js';
import { AyushCouncil } from './src/models/AyushCouncil.js';
import { CashUsage } from './src/models/CashUsage.js';
import { RechargeCard } from './src/models/RechargeCard.js';
import { WithdrawalRequest } from './src/models/WithdrawalRequest.js';
import { Earning } from './src/models/Earning.js';
import { Perceptions } from './src/models/Perceptions.js';
import { GeneralSetting } from './src/models/GeneralSetting.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Register adapter
AdminJS.registerAdapter(AdminJSMongoose);

// ---------------------------------------
// 🚀 Parent Menu Group for Doctors
// ---------------------------------------
const doctorParent = {
  name: "Doctors",
  icon: "UserCheck",
};

// ---------------------------------------
// 🚀 AdminJS Resource Config
// ---------------------------------------
const adminOptions = {
  resources: [
    // ------------------------------
    // USER Model
    // ------------------------------
    {
      resource: User,
      options: {
        parent: doctorParent,
        properties: {
          password: { isVisible: false }, // hide password
        }
      }
    },

    // ------------------------------
    // SPECIALIST DOCTOR Model
    // ------------------------------
    {
      resource: SpecialistDoctor,
      options: {
        parent: doctorParent,

        properties: {
          // show the linked user at the top, editable
          userId: {
            type: "reference",
            reference: "User",
            isVisible: { list: true, show: true, edit: true, filter: true }
          }
        },

        // Auto-populate user fields inside SHOW view
        populate: {
          userId: {
            include: {
              profile: true,
              email: true,
              phone: true,
              accountType: true
            }
          }
        }
      }
    },

    // ------------------------------
    // Other Models (Normal way)
    // ------------------------------
    { resource: Booking },
    { resource: University },
    { resource: Session },
    { resource: Review },
    { resource: RechargeHistory },
    { resource: Notification },
    { resource: Location },
    { resource: Feedback },
    { resource: DoctorSlot },
    { resource: College },
    { resource: AyushCouncil },
    { resource: CashUsage },
    { resource: RechargeCard },
    { resource: WithdrawalRequest },
    { resource: Earning },
    { resource: Perceptions },
    { resource: GeneralSetting },
  ],

  rootPath: '/admin',

  branding: {
    companyName: 'Doctogon Admin Panel',
    logo: '/static/logo3.png',
  }
};

// ---------------------------------------
// 🚀 Initialize AdminJS
// ---------------------------------------
const admin = new AdminJS(adminOptions);
const adminRouter = AdminJSExpress.buildRouter(admin);

app.use(admin.options.rootPath, adminRouter);

// static assets (logo, images)
app.use('/static', express.static(path.join(process.cwd(), 'public')));

// ---------------------------------------
// 🚀 Connect MongoDB & Start Server
// ---------------------------------------
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB Connected');

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}${admin.options.rootPath}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
