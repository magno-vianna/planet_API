import { Planet } from '../../src/models/Planet';
import PlanetService from '../../src/services/PlanetService'; 
import mongoose from 'mongoose'; 

describe('PlanetService', () => {
    let connection;
    
  beforeAll(async () => {
    connection = await mongoose.connect(<string>process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

   beforeEach(async () => {
       await Planet.deleteMany({}).exec();
   }) 
  });
 
  afterAll(async () => {
    await connection.close();
  });
    it('Deve criar um planeta com os parametros - Nome, Clima, Terreno e integrar com API Swapi retornando aparições em filmes',async () => {
        
        const planetService = new PlanetService(); 
        
        const getPlanetAppereanceFromSwapiSpy = jest.spyOn(planetService, 'getPlanetAppearanceFromSwapi');
        
        const planet = await planetService.createPlanet( 'Alderaan', 'temperate', 'ocean');
        
        expect(getPlanetAppereanceFromSwapiSpy).toHaveBeenCalledWith('Alderaan')
        expect(planet).toHaveProperty('_id')
        expect(planet).toHaveProperty('planetAppearance'); 
    })

    
    
})
