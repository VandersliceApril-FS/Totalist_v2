// load in the imports
const express = require('express');
const logErrors = require('debug')('API:error');
const log = require('debug')('API: App Logging');
const path = require('path');
const morganDebug = require('morgan-debug');
const shoppinglistRouter = require('./routes/shoppinglist');
const itemRouter = require('./routes/item');
const userRouter = require('./routes/user');
const cors = require('cors');
const requireAuth = require('./middlewares/requireAuth');
const protectedRoutes = require('./routes/protectedRoutes')
const authRoutes = require('./routes/authRoutes');
const app = express();
try {
    // checks to see if the content-type is json and parses it into req.body
  app.use(express.json());

  // log all request made to the server
  app.use(morganDebug('API:request', 'dev'));
  app.use(cors());

  // USE ROUTERS ---------------------------------
  app.use('/shoppinglists', requireAuth, shoppinglistRouter);
  app.use('/items', requireAuth, itemRouter);
  app.use('/users', requireAuth, userRouter);
  app.use('/auth', authRoutes);
  app.use('/protected', requireAuth, protectedRoutes);

  // ROUTING ---------------------------------
  // This example shows handling incoming traffic immediately
  // which is slightly different than pointing to a router (shown above)
  app.get('/', (req, res) => {
    res.json({ message: "Hello from april's server" });
  });

  // REACT STATIC FILES ---------------------------------
  // Have Node serve the files for our built React app
  app.use(express.static(path.resolve(__dirname, '../../reactjs/build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../reactjs/build', 'index.html'));
  });

  // DEFAULT ERROR HANDLER ---------------------------------
  // Four params indicate an error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    logErrors('ERROR FOUND: ', err);
    res.sendStatus(500);
  });
} catch (err) {
  console.log(err)
}


// export the app
module.exports = app;
