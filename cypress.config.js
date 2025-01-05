const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: false, // Desactiva el uso del archivo de soporte
    setupNodeEvents() {
      // implementa eventos si es necesario
    },
    video:false,
    baseUrl: 'http://localhost:5000', // Ajusta esto según tu proyecto
  },
})