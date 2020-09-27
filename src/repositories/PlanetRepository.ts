import { Planet } from "../models/Planet";
import IPlanetRepository from './IPlanetRepository';

class PlanetRepository implements IPlanetRepository {
    
    public async createPlanet(planet: Planet): Promise<Planet> {
        const planetCreated = await Planet.create(planet);
        return planetCreated; 
    };

    public async findByName(planetName: string): Promise<Planet[]>{
        const planetVerify = await Planet.find({ name: planetName }).exec();
        return planetVerify;
    };

    public async findAll(): Promise<Planet[]> {
        const planets = await Planet.find().exec();
        return planets;  
    };
    
    public async findById(planetId: any): Promise<Planet | null> {
        const planet = await Planet.findById(planetId).exec();
        return planet;
    };

    public async delete(planetId: any): Promise<Planet | null> {
       const planet = await Planet.findByIdAndDelete(planetId).exec();
       return planet;  
    }
};    

export default PlanetRepository; 