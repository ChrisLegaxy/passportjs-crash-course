import dotenv from 'dotenv';

const Locals = {
  init: async () => {
    await dotenv.config();
    console.log('Configurations :: Loaded');
  },
  config: () => {
    const port = process.env.PORT || 3000;
    const url = process.env.URL || `http://localhost:${port}`;

    const googleClientId = process.env.GOOGLE_CLIENT_ID || '';
    const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || '';

    const facebookAppId = process.env.FACEBOOK_APP_ID || '';
    const facebookAppSecret = process.env.FACEBOOK_APP_SECRET || '';

    const mongooseUri = process.env.MONGOOSE_URI;

    return {
      port,
      url,
      googleClientId,
      googleClientSecret,
      facebookAppId,
      facebookAppSecret,
      mongooseUri
    };
  }
};

export default Locals;
