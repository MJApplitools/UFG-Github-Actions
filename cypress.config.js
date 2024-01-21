const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.video =  false,
	  this.baseUrl = 'http://localhost:3000'
    },
  },
});

require('@applitools/eyes-cypress')(module); 