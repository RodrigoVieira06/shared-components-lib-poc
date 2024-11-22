import { defineConfig } from 'tsup';
import path from 'path';

export default defineConfig({
  entry: {
    MainButton: 'src/MainButton/index.ts',  // Entrada para o MainButton
    MainInput: 'src/MainInput/index.ts',    // Entrada para o MainInput
  },
  outDir: 'dist', // Pasta de saída do build
  format: ['esm', 'cjs'], // Formatos de módulo ESM e CJS
  sourcemap: true, // Geração de sourcemaps
  clean: true, // Limpa a pasta 'dist' antes de gerar o build
  dts: true, // Geração de arquivos de declaração (.d.ts)
  external: ['react', 'react-dom'], // Marcar dependências externas como externas
  splitting: false, // Desativa o splitting, queremos um arquivo por componente
  tsconfig: path.resolve(__dirname, 'tsconfig.json'), // Aponta para o tsconfig.json
});
