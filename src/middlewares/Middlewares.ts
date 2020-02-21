import { Application } from "express";
import Http from './Http';
import Passport from './Passport'

function mountPassport(_express: Application) {
  Passport.init(_express)
}

function mountHttp(_express: Application) {
  Http.init(_express);
}

const Middlewares = {
  init: (_express: Application) => {
    mountHttp(_express);

    mountPassport(_express);

    return _express;
  }
}

export default Middlewares;