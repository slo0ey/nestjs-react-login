import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@assets",
        replacement: resolve(__dirname, "src/assets"),
      },
      {
        find: "@fonts",
        replacement: resolve(__dirname, "src/assets/fonts"),
      },
      {
        find: "@icons",
        replacement: resolve(__dirname, "src/assets/icons"),
      },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: "@pages",
        replacement: resolve(__dirname, "src/pages"),
      },
      {
        find: "@hooks",
        replacement: resolve(__dirname, "src/hooks"),
      },
      {
        find: "@utils",
        replacement: resolve(__dirname, "src/utils"),
      },
      {
        find: "@styles",
        replacement: resolve(__dirname, "src/styles"),
      },
    ],
  },
  plugins: [react(), tsConfigPaths()],
});
