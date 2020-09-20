import { DocumentQuery } from 'mongoose';
import { Planet } from '../models/Planet';

interface IPlanetRepository {
    findByName(planetName: string): Promise<Planet[]>;
    findAll(): Promise<Planet[]>;
    findId(planetId: any): Promise<Planet | null>;
    delete(planetId: any): Promise<Planet | null>;
}

export default IPlanetRepository;