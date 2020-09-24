import { Planet } from '../models/Planet';
import Restify from 'restify';
import PlanetService from '../services/PlanetService';

class PlanetController {
  private planetService: PlanetService;

    constructor(planetService?: PlanetService) {
      this.planetService = planetService || new PlanetService();
    };
  
    public create = async (req: Restify.Request, res: Restify.Response, next: Restify.Next) => {
    try {
      const { name, climate, terrain } = req.body;
      const planetCreated = await this.planetService.createPlanet(name, climate, terrain);
      res.json(201, planetCreated);
      next(); 
    } catch (error) {
      next(error)
    }

  };  
  public index = async (req: Restify.Request, res: Restify.Response, next: Restify.Next) => {
    if (req.query.name) {
      const planetName = req.query.name;
      const planet = await this.planetService.findPlanetByName(planetName);
      res.json(planet);
      next();
    }else{
      const planets = await this.planetService.findPlanets();
      res.json(planets);
      next();
    };
  };
  public findById = async (req: Restify.Request, res: Restify.Response, next: Restify.Next) => {
    const planetId = req.params.id;
    const verifyId = await this.planetService.findPlanetById(planetId);
    res.json(200, verifyId);
    next(); 
  };

  /*public update = async (req: Restify.Request, res: Restify.Response, next: Restify.Next) => {
    const planetId = req.params.id;
    const planetbody = req.body;
    
    const planetUpdate = await this.planetService.updatePlanetById(req);
    res.json(planetUpdate);
    
    next(); 
  };*/

  public delete = async (req: Restify.Request, res: Restify.Response, next: Restify.Next) => {
    const planetId = req.params.id; 
    await this.planetService.deletePlanet(planetId);
    res.json(204)
    next();
  };


};

export default PlanetController;

