exports.config = {
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://swapi.co/',
      defaultHeaders: {
        'Content-Type': 'application/json'
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: false,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  timeout: 10000,
  name: 'CodeceptJs'
}