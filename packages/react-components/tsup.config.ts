import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/**/!(*.stories).{ts,tsx}"
  ],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: true,
  external: ["react"]
});
