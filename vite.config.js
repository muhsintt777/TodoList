import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Components: "/src/Components",
      assets: "/src/assets",
      services: "/src/services",
      configs: "/src/configs",
      features: "/src/features",
      utils: "/src/utils",
    },
  },
});
