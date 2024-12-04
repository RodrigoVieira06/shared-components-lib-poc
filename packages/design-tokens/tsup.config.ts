import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.js'],
  format: ['cjs'],
  dts: true,
  outDir: 'dist/js',
});
