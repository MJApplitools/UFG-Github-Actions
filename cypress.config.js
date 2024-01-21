const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.video =  false
    },
  },
});


require('@applitools/eyes-cypress')(module);