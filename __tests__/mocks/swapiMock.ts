const swapiMock = {
    count: 1,
    next: null,
    previous: null,
    results: [
      {
        name: 'Tatooine',
        rotation_period: '23',
        orbital_period: '304',
        diameter: '10465',
        climate: 'arid',
        gravity: '1 standard',
        terrain: 'desert',
        surface_water: '1',
        population: '200000',
        residents: [
          'http://swapi.dev/api/people/1/',
          'http://swapi.dev/api/people/2/',
        ],
        films: [
          'http://swapi.dev/api/films/1/',
          'http://swapi.dev/api/films/3/',
        ],
        created: '2014-12-09T13:50:49.641000Z',
        edited: '2014-12-20T20:58:18.411000Z',
        url: 'http://swapi.dev/api/planets/1/',
      },
    ],
  };
export { swapiMock };