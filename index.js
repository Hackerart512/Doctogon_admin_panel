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
import { Specialization } from './src/models/Specialization.js';

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
        },
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
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

        // Properties setup
        properties: {

          userId: {
            type: "reference",
            reference: "User",
            isVisible: { list: false, show: true, edit: true, filter: true }
          },

          // specialization reference
          specialty: {
            type: "reference",
            reference: "Specialization",
            isVisible: { list: true, show: true, edit: true, filter: true }
          },

          // allow nested specialistInfo.* to be accessed
          "specialty": { isVisible: true },
          "specialistInfo.bio": { isVisible: true },
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
        },
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        }
      }
    },

    // ------------------------------
    // Other Models (Normal way)
    // ------------------------------
    {
      resource: Booking, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: University, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: Session, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: Review, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: RechargeHistory, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: Notification, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: Location, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: Feedback, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: DoctorSlot, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: College, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: AyushCouncil, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: CashUsage, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: RechargeCard, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: WithdrawalRequest, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: Earning, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: Perceptions, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: GeneralSetting, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
    {
      resource: Specialization, options: {
        sort: {
          sortBy: 'createdAt',
          direction: 'desc',
        },
      }
    },
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
