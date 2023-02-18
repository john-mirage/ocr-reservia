import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@fonts": resolve(__dirname, "src/fonts"),
      "@images": resolve(__dirname, "src/images"),
      "@styles": resolve(__dirname, "src/styles"),
    },
  },
});