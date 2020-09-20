import { Planet } from "../models/Planet";
import IPlanetRepository from './IPlanetRepository';

class PlanetRepository implements IPlanetRepository {
    
    public async findByName(planetName: string): Promise<Planet[]>{
        const planet = await Planet.find({ name: planetName }).exec();
        return planet;
    };

    public async findAll(): Promise<Planet[]> {
        const planets = await Planet.find().exec();
        return planets;  
    };
    public async findId(planetId: any): Promise<Planet | null> {
        const planet = await Planet.findById(planetId).exec();
        return planet;
    };
    public async delete(planetId: any): Promise<Planet | null> {
       const planet = await Planet.findByIdAndDelete(planetId).exec();
       return planet;  
    }
};    

export default PlanetRepository; 