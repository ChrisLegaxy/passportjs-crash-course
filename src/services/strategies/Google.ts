import { Strategy } from 'passport-google-oauth20';

import Locals from '../../providers/Locals';
import User from '../../models/User';

import passport from 'passport';

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(null, user);
  });
});

const Google = {
  init: (_passport: any) => {
    _passport.use(
      new Strategy(
        {
          clientID: Locals.config().googleClientId,
          clientSecret: Locals.config().googleClientSecret,
          callbackURL: `${Locals.config().url}/auth/google/redirect`,
          scope: ['profile', 'email']
        },
        (accessToken, refreshToken, profile, done) => {
          User.findOne({ google: profile.id }, (err, exisitingUser) => {
            if (err) {
              done(err);
            }

            if (exisitingUser) {
              done(null, exisitingUser, {
                msg: 'User already exist'
              });
            } else {
              const user = new User({
                email: profile.emails[0].value,
                google: profile.id
              });

              user.save(err => {
                done(err, user);
              });
            }
          });
        }
      )
    );
  }
};

export default Google;
