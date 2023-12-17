import { ref, onUnmounted } from "vue";
import dayjs from "dayjs";

export function useClock(format: string = "YYYY-MM-DD HH:MM:ss") {
  const timer = ref<any>();
  const clock = ref("");

  timer.value = setInterval(() => {
    clock.value = dayjs().format(format);
  }, 1000);

  // 清除定时器
  onUnmounted(() => {
    if (timer.value) {
      clearInterval(timer.value);
    }
  });

  return clock;
}
