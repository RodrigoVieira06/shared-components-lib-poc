import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    MainButton: 'src/MainButton/index.ts',
    MainInput: 'src/MainInput/index.ts',
  },
  outDir: 'dist',
  format: ['esm'],
  clean: true,
  dts: true,
  external: ['react', 'react-dom', 'antd']
});
