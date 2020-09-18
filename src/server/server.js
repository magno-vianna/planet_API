const restify = require('restify');
const mongoose = require('mongoose');
require('dotenv').config();

const handleError = require('./error.handler');

async function initializeDb() {
  try {
    const connectionPoll = await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    return connectionPoll;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function initRoutes(routes) {
  return new Promise((resolve, reject) => {
    try {
      const options = { name: 'star-wars-api', version: '1.0.0', ignoreTrailingSlash: true };
      const application = restify.createServer(options);

      application.use(restify.plugins.queryParser());
      application.use(restify.plugins.bodyParser());

      routes.forEach((route) => {
        route.applyRoutes(application);
      });

      application.listen(process.env.SERVER_PORT, () => {
        resolve(application);
      });

      application.on('restifyError', handleError);
    } catch (error) {
      reject(error);
    }
  });
}

async function bootstrap(routes) {
  try {
    await initializeDb();
    const application = await initRoutes(routes);
    return application;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { bootstrap };
