import { DocumentQuery } from "mongoose";
import { Planet } from "../models/Planet";
import IPlanetRepository from './IPlanetRepository';

class PlanetRepository implements IPlanetRepository {
    findById(): DocumentQuery<Planet | null, Planet, {}> {
        throw new Error("Method not implemented.");
    }
    public async findByName(planetName: string): Promise<Planet[]>{
        const planet = await Planet.find({ name: planetName }).exec();
        return planet;
    };

    public async findAll(): Promise<Planet[]> {
        const planets = await Planet.find().exec();
        return planets;  
    }
  
}   

export default PlanetRepository; 