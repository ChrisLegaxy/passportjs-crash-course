import express from 'express';
import cors from 'cors';

import Locals from './Locals';
import Routes from './Routes';
import Middlewares from '../middlewares/Middlewares';

const _express : express.Application = express();

function mountMiddlewares() {
  Middlewares.init(_express)
}

function mountRoutes() {
  Routes.init(_express);
}

const Express = {
  init: async () => {
    await mountMiddlewares();
    await mountRoutes();

    _express.listen(Locals.config().port, () => {
      console.log(`Server :: Running @ http://localhost:${Locals.config().port}`)
    })
  }
}

export default Express;