import fs from 'fs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default {
  external: ['react', 'react-dom', 'antd'],
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    dts(),
  ],
};
