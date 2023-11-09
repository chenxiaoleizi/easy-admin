import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mockPlugin from "./mock/mockPlugin";

export default defineConfig({
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  plugins: [vue(), mockPlugin()]
});
