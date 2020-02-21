import { Router } from 'express';
import passport from 'passport';
import _ from 'underscore';

const router = Router();

router.get('/google', passport.authenticate('google'));

router.get(
  '/google/redirect',
  passport.authenticate('google'),
  (req: any, res) => {
    if (_.isEmpty(req.authInfo)) {
      res.send(req.user);
    } else res.send(req.authInfo);
  }
);

// router.get(
//   '/facebook',
//   passport.authenticate('facebook', {
//     scope: ['email', 'user_birthday']
//   })
// );

// router.get(
//   '/facebook/redirect',
//   passport.authenticate('facebook'),
//   (req: any, res) => {
//     res.send('Facebook');
//     console.log(req.profile)
//   }
// );
export default router;
