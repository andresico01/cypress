const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: require('./webpack.config.js'),
        watchOptions: {},
      };
      on('file:preprocessor', webpackPreprocessor(options));
      return config;
    },
    baseUrl: 'https://www.leagueoflegends.com/', // Tu URL
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false // Importante para evitar líos de cross-origin
  },
});