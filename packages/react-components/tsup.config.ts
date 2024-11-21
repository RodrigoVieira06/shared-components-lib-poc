import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/components/**/!(*.stories).{ts,tsx}"
  ],
  dts: true,
  outDir: "dist",
  splitting: false,
  clean: true,
  minify: true,
  target: "ES6",
});
