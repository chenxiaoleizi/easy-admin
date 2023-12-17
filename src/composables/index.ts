import { ref, onUnmounted } from "vue";
import dayjs from "dayjs";

export function useClock(format: string = "YYYY-MM-DD HH:mm:ss") {
  const timer = ref<any>();
  const clock = ref("");

  setClock();
  function setClock() {
    clock.value = dayjs().format(format);
    timer.value = setTimeout(() => {
      setClock();
    }, 1000);
  }

  // 清除定时器
  onUnmounted(() => {
    if (timer.value) {
      clearTimeout(timer.value);
    }
  });

  return clock;
}
