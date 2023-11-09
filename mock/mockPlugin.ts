import { ViteDevServer } from "vite";
import mockData from "./mockData";

export default function mockPlugin() {
  return {
    name: "mockPlugin",
    apply({ mode }) {
      return mode === "mock";
    },
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        const { url } = req;

        if (url && Reflect.has(mockData, url)) {
          const result = mockData[url](req, res);

          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(result));
        } else {
          next();
        }
      });
    }
  };
}
