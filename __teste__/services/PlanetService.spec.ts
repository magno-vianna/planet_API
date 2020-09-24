import PlanetService from '../../src/services/PlanetService'; 

describe('PlanetService', () => {
    it('Deve padrinizar com Pascal Case o nome do planet', () => {
       
        const planetService = new PlanetService(); 
        const planetName = planetService.stringToPascalCase('aLdeRaAn'); 

        expect(planetName).toBe('Alderaan');
    })

    

})    

