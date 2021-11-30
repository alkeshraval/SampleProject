const cypress = require('cypress')
const server = require('./app.js')

// cypress.run({
//   browser : 'chrome',
//   headed : true
// })
// .then((results) => {
  
// })



// runs Cypress end-to-end tests using Cypress Node module API
// https://on.cypress.io/module-api

/* eslint-disable no-console */

// const cypress = require('cypress')

cypress.run({
  browser : 'chrome',
  headed : true
})
.then((results) => {
  if (results.failures) {
    // means really bad error, could not run tests
    console.error('Failed to run Cypress')
    console.error(results.message)
  }
  console.log('Cypress run results: %d total tests, %d passed, %d failed',
    results.totalTests, results.totalPassed, results.totalFailed)

  //process.exit(results.totalFailed);
  return server.stop();
  
})