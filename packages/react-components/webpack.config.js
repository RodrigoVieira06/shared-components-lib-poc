const path = require('path');

module.exports = {
  entry: {
    MainButton: './src/MainButton/index.ts', // Entrada para o MainButton
    MainInput: './src/MainInput/index.ts',   // Entrada para o MainInput
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: (pathData) => {
      // Gera o nome do arquivo baseado no nome da entrada
      return `${pathData.chunk.name}/index.js`;
    },
    libraryTarget: 'umd', // Cria pacotes UMD que podem ser usados em qualquer lugar
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // Extensões de arquivos que o Webpack pode resolver
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Regra para arquivos TypeScript
        use: 'ts-loader', // Usa o ts-loader para compilar TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    // Marque dependências como externas para evitar que sejam bundladas
    react: 'react',
    'react-dom': 'react-dom',
  },
  mode: 'production', // Modo de produção para otimizar o build
  devtool: 'source-map', // Geração de sourcemaps
};
