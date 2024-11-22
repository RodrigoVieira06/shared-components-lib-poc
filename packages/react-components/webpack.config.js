const path = require('path');

module.exports = {
  entry: {
    MainInput: './src/MainInput/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: (pathData) => {
      return `${pathData.chunk.name}/index.js`;
    },
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  mode: 'production',
  devtool: 'source-map',
};
