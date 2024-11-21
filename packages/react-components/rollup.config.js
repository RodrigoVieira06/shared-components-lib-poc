const path = require('path');
const typescript = require('rollup-plugin-typescript2');

module.exports = {
  input: [
    'src/MainButton/index.ts',  // Arquivo de entrada para Button
    'src/MainInput/index.ts',   // Arquivo de entrada para Input
    // Adicione mais componentes conforme necessário
  ],
  output: [
    {
      dir: 'dist',                    // O diretório de saída
      format: 'esm',                   // Formato ESM para tree shaking
      sourcemap: true,
      preserveModules: true,           // Mantém os módulos separados
      preserveModulesRoot: 'src',      // Mantém a estrutura de pastas do src
    },
    {
      dir: 'dist',                    // O diretório de saída
      format: 'cjs',                   // Formato CommonJS
      sourcemap: true,
      preserveModules: true,           // Mantém os módulos separados também para CJS
      preserveModulesRoot: 'src',      // Mantém a estrutura de pastas do src
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      useTsconfigDeclarationDir: true,
    })
  ],
  preserveModules: true,
  preserveModulesRoot: 'src',
};
