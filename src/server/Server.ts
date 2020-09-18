import restify from 'restify';
import mongoose, { Mongoose } from 'mongoose';
require('dotenv').config();

//import handleError from './error.handler';

const conectionString = process.env.DB_CONNECTION_STRING; 

class Server{
  private async initializeDb(): Promise<Mongoose> {
    try {
      const connectionPoll = await mongoose.connect( <string> conectionString, {
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
  
  private initRoutes(routes: any[]): Promise<any> {
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
  
        //application.on('restifyError', handleError);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  public async bootstrap(routes: any[]): Promise<any> {
    try {
      await this.initializeDb();
      const application = await this.initRoutes(routes);
      return application;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
} 



export default Server;
