const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  timeout: 10000,
  output: './output',
  helpers: {
    REST: {
      endpoint: "https://swapi.co/",
      defaultHeaders: {
        "Content-Type": "application/json"
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: false,
  mocha: {},
  name: 'CodeceptJs'
}