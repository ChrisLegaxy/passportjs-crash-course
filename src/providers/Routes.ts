import { Application, Request, Response } from 'express';

import AuthRoute from '../routes/api/Auth';

const Routes = {
  init: (_express: Application): any => {
    _express.get('/', (req: Request, res: Response): any => {
      res.redirect('/auth/google');
    });

    _express.use('/auth', AuthRoute);
  }
};

export default Routes;
