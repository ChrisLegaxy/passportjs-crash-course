// import { Strategy } from 'passport-facebook';

// import passport from 'passport';

// import Locals from '../../providers/Locals';

// passport.serializeUser((profile: any, done) => {
//   done(null, profile);
// });

// passport.deserializeUser((profile, done) => {
//   done(null, profile)
// });

// const Facebook = {
//   init: (_passport: any) => {
//     passport.use(
//       new Strategy(
//         {
//           clientID: Locals.config().facebookAppId,
//           clientSecret: Locals.config().facebookAppSecret,
//           callbackURL: `${Locals.config().url}/auth/facebook/redirect`,
//           profileFields: ['email', 'birthday']
//         },
//         (accessToken, refreshToken, profile, done) => {
//           done(null, profile)
//         }
//       )
//     );
//   }
// };
// export default Facebook;
