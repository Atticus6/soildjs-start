import path from "path";

import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    TanStackRouterVite({ target: "solid", autoCodeSplitting: true }),
    solid(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
