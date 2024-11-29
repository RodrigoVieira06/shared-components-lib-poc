import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.js'],
  format: ['esm'],
  dts: true,
  outDir: 'dist/js'
});