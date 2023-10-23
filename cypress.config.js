const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout : 6000,

  env: {
     url: "https://rahulshettyacademy.com",
    projectId: "17oho2",

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/E2E/*.js'
    
  },
});
