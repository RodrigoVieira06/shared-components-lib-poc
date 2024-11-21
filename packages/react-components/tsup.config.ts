import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/components/**/*.{ts,tsx}"],
  dts: true,
  outDir: "dist",
  format: ["esm"],
  splitting: false,
  clean: true,
  minify: true,
  target: "ES6",
  esbuildOptions: (options) => {
    options.chunkNames = "[name]";
  },
});
