const path = require('path');

module.exports = {
  entry: './dist/Bootstrap.js',
  mode: "development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};