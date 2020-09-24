import { Planet } from "../../src/models/Planet";
import IPlanetRepository from "../../src/repositories/IPlanetRepository";
import PlanetService from "../../src/services/PlanetService";

class PlanetRepository implements IPlanetRepository {
    
    private planets: Planet[] = [];

    public async createPlanet(planet: Planet): Promise<Planet> {
        const planetCreated = new Planet(planet); 
        this.planets.push(planetCreated)
        console.log(this.planets)
        return planetCreated;

    };

    public async findByName(planetName: string): Promise<Planet[]>{
       const planet = this.planets.filter(planet => planet.name === planetName);
        console.log(planet)
        return planet; 
    };

    public async findAll(): Promise<Planet[]> {
        return [] ; 
    };
    
    public async findById(planetId: any): Promise<Planet | null> {
        return null; 
    };

    public async delete(planetId: any): Promise<Planet | null> {
        return null; 
    }
};    

export default PlanetRepository; 