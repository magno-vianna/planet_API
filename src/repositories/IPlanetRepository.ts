import { DocumentQuery } from 'mongoose';
import { Planet } from '../models/Planet';

interface IPlanetRepository {
    findByName(planetName: string): Promise<Planet[]>;
    findAll(): Promise<Planet[]>;
    findById(): DocumentQuery<Planet | null, Planet, {}>;
    
}

export default IPlanetRepository;