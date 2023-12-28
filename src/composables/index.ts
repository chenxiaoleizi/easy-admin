import { ref, unref, computed, onUnmounted } from "vue";
import dayjs from "dayjs";
import { cloneDeep, isEqual } from "lodash-es";

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

export function useVModel(props: any, propName: string, emit: any) {
  const value = computed({
    get() {
      return props[propName];
    },
    set(value) {
      emit(`update:${propName}`, value);
    }
  });

  return value;
}

export function useIsModified(raw) {
  const cached = cloneDeep(unref(raw));
  const isModified = computed(() => !isEqual(cached, unref(raw)));
  return isModified;
}
