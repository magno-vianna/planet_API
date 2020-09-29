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
    it('Deve criar um planeta com os parametros - Nome, Clima, Terreno e Mokar a API Swapi retornando aparições em filmes',async () => {
        
        const planetService = new PlanetService(); 
        
        const getPlanetAppereanceFromSwapiMock = jest.spyOn(planetService, 'getPlanetAppearanceFromSwapi');
        getPlanetAppereanceFromSwapiMock.mockResolvedValue(5);
        
        const planet = await planetService.createPlanet( 'Alderaan', 'temperate', 'ocean');
        
        expect(planet).toHaveProperty('_id')
        expect(planet).toHaveProperty('planetAppearance'); 
    })

    it('Deve padrinizar com Pascal Case o nome do planeta informado',async () => {
        
        const planetService = new PlanetService(); 
        
        const getPlanetAppereanceFromSwapiMock = jest.spyOn(planetService, 'getPlanetAppearanceFromSwapi');
        getPlanetAppereanceFromSwapiMock.mockResolvedValue(5);
        
        const planet = await planetService.createPlanet( 'aLdErAaN', 'temperate', 'ocean');
        
        expect(planet).toHaveProperty('name', 'Alderaan')
    })

    it('Deve lançar uma exceção caso ocorra duplicidade na criação de um planeta',async () => {
        
        const planetService = new PlanetService(); 
        
        const getPlanetAppereanceFromSwapiMock = jest.spyOn(planetService, 'getPlanetAppearanceFromSwapi');
        getPlanetAppereanceFromSwapiMock.mockResolvedValue(5);
        
        await planetService.createPlanet( 'aLdErAaN', 'temperate', 'ocean');
       
        await expect(planetService.createPlanet( 'aLdErAaN', 'temperate', 'ocean')).rejects.toThrow('Planet already exists');
    })


    it('Deve retornar um planeta com busca realizada pelo nome', async () => {
        const planetService = new PlanetService(); 
        
        const getPlanetAppereanceFromSwapiMock = jest.spyOn(planetService, 'getPlanetAppearanceFromSwapi');
        getPlanetAppereanceFromSwapiMock.mockResolvedValue(5);
        
        await planetService.createPlanet( 'Tatooine', 'temperate', 'ocean');
        
        const planet = await planetService.findPlanetByName('Tatooine'); 
        expect(planet[0].name).toBe('Tatooine')
    })

    it('Deve retornar todos os planetas', async () => {
        const planetService = new PlanetService(); 
        
        const getPlanetAppereanceFromSwapiMock = jest.spyOn(planetService, 'getPlanetAppearanceFromSwapi');
        getPlanetAppereanceFromSwapiMock.mockResolvedValue(5);
        
        await planetService.createPlanet( 'Tatooine', 'temperate', 'ocean');

        const planet = await planetService.findPlanets();
        expect(planet.length).toBe(1)

    }) 

    it('Deve retornar um planeta pelo Id', async () =>  {
        const planetService = new PlanetService(); 
        
        const getPlanetAppereanceFromSwapiMock = jest.spyOn(planetService, 'getPlanetAppearanceFromSwapi');
        getPlanetAppereanceFromSwapiMock.mockResolvedValue(5);
        
        const planetCreated = <any> await planetService.createPlanet('Tatooine', 'temperate', 'ocean');
        const planet = await planetService.findPlanetById(planetCreated._id)

        expect(planet).toHaveProperty('_id')
        expect(planet?.name).toBe('Tatooine')

    }) 

    it('Deve deletar um planeta pelo Id', async () => {
        const planetService = new PlanetService(); 
        
        const getPlanetAppereanceFromSwapiMock = jest.spyOn(planetService, 'getPlanetAppearanceFromSwapi');
        getPlanetAppereanceFromSwapiMock.mockResolvedValue(5);
        
        const planetCreated = <any> await planetService.createPlanet('Tatooine', 'temperate', 'ocean');

        await planetService.deletePlanet(planetCreated._id)    
        
        const planetFindAll = await planetService.findPlanets();

        expect(planetFindAll.length).toBe(0)
    })

})
