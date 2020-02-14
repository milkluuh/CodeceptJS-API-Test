Feature('Star Wars API');

const assert = require('assert');
Scenario('Test Star Wars API - People', (I) => {
    I.sendGetRequest('api/people/1').then(response => {
    //  console.log(response);
        assert.equal(response.status, 200);
        assert.equal(response.data.name, 'Luke Skywalker');
        assert.equal(response.data.height, '172');
        assert.equal(response.data.mass, '77');
        assert.equal(response.data.hair_color, 'blond');
        assert.equal(response.data.skin_color, 'fair');
        assert.equal(response.data.eye_color, 'blue');
        assert.equal(response.data.birth_year, '19BBY');
        assert.equal(response.data.gender, 'male');
        // assert.equal(response.data.homeworld, 'https://swapi.co/api/planets/1/');
        // assert.equal(response.data.films[0], 'https://swapi.co/api/films/2/');
        // assert.equal(response.data.films[1], 'https://swapi.co/api/films/6/');
        // assert.equal(response.data.films[2], 'https://swapi.co/api/films/3/');
        // assert.equal(response.data.films[3], 'https://swapi.co/api/films/1/');
        // assert.equal(response.data.films[4], 'https://swapi.co/api/films/7/');
        // assert.equal(response.data.species[0], 'https://swapi.co/api/species/1/');
        // assert.equal(response.data.vehicles[0], 'https://swapi.co/api/vehicles/14/');
        // assert.equal(response.data.vehicles[1], 'https://swapi.co/api/vehicles/30/');
        // assert.equal(response.data.starships[0], 'https://swapi.co/api/starships/12/');
        // assert.equal(response.data.starships[1], 'https://swapi.co/api/starships/22/');
        // assert.equal(response.data.url, 'https://swapi.co/api/people/1/');
    })
});

Scenario('Test Star Wars API - Planets ', (I) => {
    I.sendGetRequest('api/planets/1').then(response => {
            assert.equal(response.status, 200);
            assert.equal(response.data.name, 'Tatooine');
            assert.equal(response.data.rotation_period, '23');
            assert.equal(response.data.orbital_period, '304');
            assert.equal(response.data.diameter, '10465');
            assert.equal(response.data.climate, 'arid');
            assert.equal(response.data.gravity, '1 standard');
            assert.equal(response.data.terrain, 'desert');
            assert.equal(response.data.surface_water, '1');
            assert.equal(response.data.population, '200000');
            // assert.equal(response.data.residents[0], 'https://swapi.co/api/people/1/');
            // assert.equal(response.data.residents[1], 'https://swapi.co/api/people/2/');
            // assert.equal(response.data.residents[2], 'https://swapi.co/api/people/4/');
            // assert.equal(response.data.residents[3], 'https://swapi.co/api/people/6/');
            // assert.equal(response.data.residents[4], 'https://swapi.co/api/people/7/');
            // assert.equal(response.data.residents[5], 'https://swapi.co/api/people/8/');
            // assert.equal(response.data.residents[6], 'https://swapi.co/api/people/9/');
            // assert.equal(response.data.residents[7], 'https://swapi.co/api/people/11/');
            // assert.equal(response.data.residents[8], 'https://swapi.co/api/people/43/');
            // assert.equal(response.data.residents[9], 'https://swapi.co/api/people/62/');
            // assert.equal(response.data.films[0], 'https://swapi.co/api/films/5/')
            // assert.equal(response.data.films[1], 'https://swapi.co/api/films/4/')
            // assert.equal(response.data.films[2], 'https://swapi.co/api/films/6/')
            // assert.equal(response.data.films[3], 'https://swapi.co/api/films/3/')
            // assert.equal(response.data.films[4], 'https://swapi.co/api/films/1/')
            // assert.equal(response.data.url, 'https://swapi.co/api/planets/1/');
        })
});


 //     res.data = [{}, {}];
    //     res.data.forEach(value => {
    //         console.log(value);
    //     })
    // }).catch(err => {