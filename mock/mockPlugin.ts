import { ViteDevServer } from "vite";
import mockData from "./mockData";

// 查找是否有匹配的 path
function matchPath(mockData, url) {
  const keys = Object.keys(mockData);

  return keys.find((item) => url.startsWith(item));
}

export default function mockPlugin() {
  return {
    name: "mockPlugin",
    apply({ mode }) {
      return mode === "mock";
    },
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        const { url } = req;

        const matched = matchPath(mockData, url);

        if (url && matched) {
          const result = mockData[matched](req, res);

          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(result));
        } else {
          next();
        }
      });
    }
  };
}
