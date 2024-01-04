import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mockPlugin from "./mock/mockPlugin";
import { theme } from "ant-design-vue";

const { defaultAlgorithm, defaultSeed } = theme;
const mapToken = defaultAlgorithm(defaultSeed);

export default defineConfig({
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: mapToken
      }
    }
  },
  plugins: [vue(), mockPlugin()]
});
