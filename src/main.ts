import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "./style.css";
import App from "./App.vue";
import { router } from "@/router/index.ts";

const app = createApp(App);
app.use(router);
app.use(Antd);
app.mount("#app");
