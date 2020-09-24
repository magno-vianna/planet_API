import PlanetService from '../../src/services/PlanetService'; 
import FakePlanetRepository from '../repositories/FakePlanetRepository';
import { swapiMock } from '../mocks/swapiMock';


describe('PlanetService', () => {
    it('Deve padrinizar com Pascal Case o nome do planeta', () => {
        const planetService = new PlanetService(); 
        const planetName = planetService.stringToPascalCase('aLdeRaAn'); 

        expect(planetName).toBe('Alderaan');
    })

    it('Deve criar um planeta com os parametros - Nome, Clima e Terreno', async () => {
        const fakePlanetRepository = new FakePlanetRepository(); 
        const planetService = new PlanetService(fakePlanetRepository); 
                     
        const getPlanetAppereanceFromSwapiMock = jest.spyOn(planetService, 'getPlanetAppearanceFromSwapi');
        getPlanetAppereanceFromSwapiMock.mockResolvedValue(swapiMock);

        const planet = await planetService.createPlanet( 'Alderaan', 'Arid', 'Barro');
        console.log(planet)
        expect(planet).toHaveProperty('_id'); 

    })

    it('Deve buscar um planeta pelo nome', async () => {
        const fakePlanetRepository = new FakePlanetRepository(); 
        const planetService = new PlanetService(fakePlanetRepository); 

        await planetService.createPlanet( 'Tatooine', 'Arid', 'Barro');
        
        const planet = await planetService.findPlanetByName('Tatooine'); 

        expect(planet[0].name).toBe('Tatooine');
    })

})    

