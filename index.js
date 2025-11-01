import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import path from 'path';

import { User } from './src/models/User.js';
import { Booking } from './src/models/Booking.js';
import { University } from './src/models/University.js';
import { Specialization } from './src/models/Specialization.js';
import { Session } from './src/models/Session.js';
import { Review } from './src/models/Review.js';
import { RechargeHistory } from './src/models/RechargeHistory.js';
import { PaymentIntent } from './src/models/PaymentIntent.js';
import { Notification } from './src/models/Notification.js';
import { Location } from './src/models/Location.js';
import { Feedback } from './src/models/Feedback.js';
import { DoctorSlot } from './src/models/DoctorSlot.js';
import { College } from './src/models/College.js';
import { CoinUsage } from './src/models/CoinUsage.js';
import { RechargeCard } from './src/models/RechargeCard.js';
import { DoctorSlot } from './src/models/DoctorSlot.js';


dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// AdminJS setup
AdminJS.registerAdapter(AdminJSMongoose);

const adminOptions = {
  resources: [
    { resource: User },
    { resource: Booking },
    { resource: University },
    { resource: Specialization },
    { resource: Session },
    { resource: Review },
    { resource: RechargeHistory },
    { resource: Notification },
    { resource: Location },
    { resource: Feedback },
    { resource: DoctorSlot },
    { resource: College },
    { resource: CoinUsage },
    { resource: RechargeCard },
    { resource: DoctorSlot },
  ],
  rootPath: '/admin',
  branding: {
    companyName: 'Doctogon Admin panel',
    logo: '/static/logo3.png',
  },
};

const admin = new AdminJS(adminOptions);
const adminRouter = AdminJSExpress.buildRouter(admin);

app.use(admin.options.rootPath, adminRouter);

app.use('/static', express.static(path.join(process.cwd(), 'public')));

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}${admin.options.rootPath}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
