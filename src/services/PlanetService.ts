
import { Planet } from '../models/Planet';
import IPlanetRepository from '../repositories/IPlanetRepository';
import PlanetRepository from '../repositories/PlanetRepository';
import axios from 'axios'; 

class PlanetService {
  private planetRepository: IPlanetRepository;
  
  constructor(planetRepository?: PlanetRepository) {
    this.planetRepository = planetRepository || new PlanetRepository();
  }
  public async createPlanet(name: string, climate: string, terrain: string,) {
    const verifiy = await this.planetRepository.findByName(name);
    if (verifiy.length){
      return verifiy;
    }
    const getApiSwapi = await axios.get(`https://swapi.dev/api/planets/?search=${ name }`);
    const arrayApiSwapi = getApiSwapi.data.results[0].films.length; 
    
    const planet = new Planet({ name, climate, terrain, planetAppearance: arrayApiSwapi }); 
    const createdPlanet = await this.planetRepository.createPlanet(planet);
    
    
    return createdPlanet; 
  };
  
  public async findPlanets() {
    const planets = await this.planetRepository.findAll();
    return planets;
  };

  public async findPlanetByName(planetName: string) {
    const planet = await this.planetRepository.findByName(planetName);
    return planet;
  };
  
  public async findPlanetById(planetId: any) {
    const planet = await this.planetRepository.findById(planetId);
    return planet; 
  };

  public async deletePlanet(planetId: any){
    const planet = await this.planetRepository.delete(planetId);
    return planet; 
  };

};
export default PlanetService; 

