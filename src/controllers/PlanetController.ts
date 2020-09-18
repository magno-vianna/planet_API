//import Planet from '../models/Planet';
import Restify from 'restify';

class PlanetController {
  public index = async (req: Restify.Request, res: Restify.Response, next: Restify.Next) => {
    res.json('Hello Wolrd');
    next();
  };
};

export default PlanetController;

