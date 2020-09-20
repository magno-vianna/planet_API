import { plugin } from 'mongoose';
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

  public async findPlanetByName(planetName: string) {
    const planet = await this.planetRepository.findByName(planetName);
    return planet;
  }
  
  public async findPlanetById(planetId: any) {
    const planet = await this.planetRepository.findId(planetId);
    return planet; 
  }

  public async deletePlanet(planetId: any){
    const planet = await this.planetRepository.delete(planetId);
    return planet; 
  }

}



export default PlanetService; 

