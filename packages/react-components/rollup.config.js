const path = require('path');
const typescript = require('rollup-plugin-typescript2');

module.exports = {
  external: ['react', 'react-dom', 'antd'], // Definir dependências externas corretamente
  input: 'src/index.ts', // Use apenas o arquivo principal como entrada
  output: [
    {
      dir: 'dist',
      format: 'esm', // Formato ES Modules
      sourcemap: true,
      preserveModules: true, // Preserva a estrutura de módulos
      preserveModulesRoot: 'src', // Garante que a estrutura do src seja usada no dist
    },
  ],
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      useTsconfigDeclarationDir: true,
      clean: true,
    }),
  ],
};
