
import { Planet } from '../models/Planet';
import IPlanetRepository from '../repositories/IPlanetRepository';
import PlanetRepository from '../repositories/PlanetRepository';
import axios from 'axios'; 

class PlanetService {
  private planetRepository: IPlanetRepository;
  
  constructor(planetRepository?: IPlanetRepository) {
    this.planetRepository = planetRepository || new PlanetRepository();
  }
  public async createPlanet(name: string, climate: string, terrain: string,) {
    const verifiy = await this.planetRepository.findByName(name);
    if (verifiy.length){
      return verifiy;
    }
    const planetAppearenceSwapi = await this.getPlanetAppearanceFromSwapi(name); 

    
    const namePascalCase = this.stringToPascalCase(name)
    
    const planet = new Planet({ name: namePascalCase, climate, terrain });
    if (planetAppearenceSwapi){
      planet.planetAppearance = planetAppearenceSwapi
    }
    const createdPlanet = await this.planetRepository.createPlanet(planet);
    
    return createdPlanet; 
  };
  
  public async getPlanetAppearanceFromSwapi(name: string) {
    try {
      console.log('------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      const getApiSwapi = await axios.get(`https://swapi.dev/api/planets/?search=${name}`, {timeout: 2000});
      console.log(getApiSwapi.data)
      if (getApiSwapi.data.results.length){
        const arrayApiSwapi = getApiSwapi.data.results[0].films.length;
        return  arrayApiSwapi;
      }
      return null;
    } catch (error) {
      console.log(error)
      throw new Error('Error calling API Swapi')
    }
    
  }

  public stringToPascalCase(name: string) {
    return name.split(' ')
      .map(item => item.charAt(0).toUpperCase() + item.substr(1).toLowerCase())
      .join(' ');
  } 

  public async findPlanets() {
    const planets = await this.planetRepository.findAll();  
    return planets;
  };

  public async findPlanetByName(planetName: string) {
    const namePascalCase = this.stringToPascalCase(planetName)
    const planet = await this.planetRepository.findByName(namePascalCase);
    return planet;
  };
  
  public async findPlanetById(planetId: any) {
    const planet = await this.planetRepository.findById(planetId);
    return planet; 
  };

  /*public async updatePlanetById(planetId: any){
    const planet = await this.planetRepository.findById(planetId)
        
    return planet;
  };*/

  public async deletePlanet(planetId: any){
    const planet = await this.planetRepository.delete(planetId);
    return planet; 
  };

};
export default PlanetService; 

