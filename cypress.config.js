const { defineConfig } = require("cypress"); // importa config

module.exports = defineConfig({
  // exporta config
  e2e: {
    baseUrl: "https://www.saucedemo.com", // url base
  },
});
