import type { App } from "vue";
import TableQuery from "./TableQuery.vue";
import TableHeader from "./TableHeader.vue";

export default {
  install: (app: App) => {
    app.component("TableQuery", TableQuery);
    app.component("TableHeader", TableHeader);
  },
};
