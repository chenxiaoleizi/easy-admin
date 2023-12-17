import type { App, Directive } from "vue";
import { message } from "ant-design-vue";

const copy: Directive = {
  mounted(el, binding) {
    const value = binding.value;

    function clickHandler() {
      // 创建元素
      const textarea = document.createElement("textarea");
      textarea.readOnly = true;
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      textarea.value = value;

      // 添加元素
      document.body.appendChild(textarea);
      textarea.select();
      const result = document.execCommand("Copy");
      if (result) {
        message.success("复制成功");
      }

      // 移除元素
      document.body.removeChild(textarea);
    }

    el.clickHandler = clickHandler;

    el.addEventListener("click", clickHandler);
  },
  unmounted(el) {
    el.addEventListener("click", el.clickHandler);
  }
};

export default {
  install(app: App) {
    app.directive("copy", copy);
  }
};
