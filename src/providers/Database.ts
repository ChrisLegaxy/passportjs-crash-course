import mongoose from 'mongoose';

import Locals from './Locals'

const Database = {
  init: () => {
    mongoose.set('useCreateIndex', true);
    return mongoose.connect(Locals.config().mongooseUri, { useUnifiedTopology: true, useNewUrlParser: true}, (err) => {
      if (err) {
        console.log(err)
      }
      console.log('Database Connected')
    })
  }
}

export default Database;