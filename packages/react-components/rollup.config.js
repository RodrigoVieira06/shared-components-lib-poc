import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';

export default {
  external: ['react', 'react-dom', 'antd'],
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    scss({
      output: 'dist/styles.css',
      outputStyle: 'compressed',
    }),
  ],
};
