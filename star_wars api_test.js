Feature('Star Wars API');

const assert = require('assert');
Scenario('Test Star Wars API - People', (I) => {
    I.sendGetRequest('api/people/1').then(response => {
        assert.equal(response.status, 200);
        assert.equal(response.data.name, 'Luke Skywalker');
        assert.equal(response.data.height, '172');
        assert.equal(response.data.mass, '77');
        assert.equal(response.data.hair_color, 'blond');
        assert.equal(response.data.skin_color, 'fair');
        assert.equal(response.data.eye_color, 'blue');
        assert.equal(response.data.birth_year, '19BBY');
        assert.equal(response.data.gender, 'male');
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
        })
});