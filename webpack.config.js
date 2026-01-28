// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, 'cypress/support/ui'),
      '@tasks': path.resolve(__dirname, 'cypress/support/tasks'),
      '@questions': path.resolve(__dirname, 'cypress/support/questions'),
      '@utils': path.resolve(__dirname, 'cypress/support/utils')
    },
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' 
          // NOTA: Ya no ponemos 'options' aquí porque Babel leerá automáticamente el archivo .babelrc
        },
      },
    ],
  },
};