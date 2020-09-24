import { DocumentQuery } from 'mongoose';
import { Planet } from '../models/Planet';

interface IPlanetRepository {
    createPlanet(planet: Planet): Promise<Planet>;
    findByName(planetName: string): Promise<Planet[]>;
    findAll(): Promise<Planet[]>;
    findById(planetId: any): Promise<Planet | null>;
   // updateFindById(planetId: any): Promise<Planet | null>
    delete(planetId: any): Promise<Planet | null>;
}

export default IPlanetRepository;