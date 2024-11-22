const path = require('path');
const typescript = require('rollup-plugin-typescript2');

module.exports = {
  external: ['react', 'react-dom', 'antd'],
  input: [
    'src/MainButton/index.ts',
    'src/MainInput/index.ts',
    'src/index.ts'
  ],
  output: [
    {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      useTsconfigDeclarationDir: true,
      clean: true
    }),
  ],
};
