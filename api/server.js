// set up a logger
const log = require('debug')('api:logging');
// get the express application
const app = require('./app');
// set the port to either the one passed from the environment variables or 4000
const PORT = process.env.PORT || 3001;
// spin up the server and log the port it's running on
app.listen(PORT, () => log(`API listening on port ${PORT}`));
