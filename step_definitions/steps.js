const { I } = inject();
const assert = require('assert');
let response;

Given('i set the base url', () => {
  //set up on helper
});

When('i send a get request to the endpoint of people', async () => {
  response = await I.sendGetRequest('api/people/1');
});

Then('the api return the status code 200', () => {
  assert.equal(response.status, 200);
});

Then('the correct data of the people', () => {
  assert.equal(response.data.name, 'Luke Skywalker');
  assert.equal(response.data.height, '172');
  assert.equal(response.data.mass, '77');
  assert.equal(response.data.hair_color, 'blond');
  assert.equal(response.data.skin_color, 'fair');
  assert.equal(response.data.eye_color, 'blue');
  assert.equal(response.data.birth_year, '19BBY');
  assert.equal(response.data.gender, 'male');
});

When('i send a get request to the endpoint of planets', async () => {
  response = await I.sendGetRequest('api/planets/1');
});

Then('the correct data of the planets', (I) => {
  assert.equal(response.data.name, 'Tatooine');
  assert.equal(response.data.rotation_period, '23');
  assert.equal(response.data.orbital_period, '304');
  assert.equal(response.data.diameter, '10465');
  assert.equal(response.data.climate, 'arid');
  assert.equal(response.data.gravity, '1 standard');
  assert.equal(response.data.terrain, 'desert');
  assert.equal(response.data.surface_water, '1');
  assert.equal(response.data.population, '200000');
});
