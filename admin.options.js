const AdminJS = require('adminjs');
const User = require('./models/User');

const adminOptions = {
  resources: [
    {
      resource: User,
      options: {
        properties: {
          password: { isVisible: false },
        }
      }
    }
  ],
  rootPath: '/admin',
  branding: {
    companyName: 'My Node Admin',
  }
};

module.exports = adminOptions;
