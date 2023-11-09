import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "./style.css";
import App from "./App.vue";
import { router } from "@/router/index";
import { pinia } from "@/store/index";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(Antd);
app.mount("#app");
