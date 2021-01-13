import { DocumentQuery } from 'mongoose';
import { Planet } from '../models/Planet';

interface IPlanetRepository {
    createPlanet(planet: Planet): Promise<Planet>;
    findByName(planetName: string): Promise<Planet[]>;
    findAll(): Promise<Planet[]>;
    findById(planetId: any): Promise<Planet | undefined | null>;
    delete(planetId: any): Promise<Planet | undefined | null>;
}

export default IPlanetRepository;