import typescript from '@rollup/plugin-typescript';

export default {
  external: ['react', 'react-dom', 'antd'],
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    preserveModules: true,
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
};
