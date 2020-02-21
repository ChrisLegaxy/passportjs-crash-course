import passport from 'passport';
import { Application } from 'express';

import Google from '../services/strategies/Google';
import Facebook from '../services/strategies/Facebook';

function mountStrategies() {
  Google.init(passport);
  Facebook.init(passport);
}

const Passport = {
  init: (_express: Application) => {
    _express.use(passport.initialize())
    _express.use(passport.session())

    mountStrategies()
  }
}

export default Passport;