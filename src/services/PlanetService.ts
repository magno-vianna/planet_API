import { Planet } from '../models/Planet';
import PlanetRepository from '../repositories/PlanetRepository';

class PlanetService {
  private planetRepository: PlanetRepository;
  
  constructor(planetRepository?: PlanetRepository) {
    this.planetRepository = planetRepository || new PlanetRepository();
  }
  
  public async findPlanets() {
    const planets = await this.planetRepository.findAll();
    return planets;
  }

  public async findPlanetByName(planetName) {
    const planet = await this.planetRepository.findByName(planetName);
    return planet;
  }
}



export default PlanetService; 

