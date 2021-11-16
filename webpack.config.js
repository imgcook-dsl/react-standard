const path = require('path');

module.exports = {
  watch: true,
  // entry: './src/entry.js',
  entry: './src/core/entry.ts',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use:'ts-loader',
        exclude: /node_modules/,
    },

    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'src'),
    libraryTarget: 'commonjs2',
  }
};