import {
  ref,
  reactive,
  onMounted,
  computed,
  onBeforeUnmount,
  onUnmounted,
  nextTick,
  onScopeDispose,
} from "vue";
import type { Ref, Reactive } from "vue";
import dayjs from "dayjs";
import { debounce } from "lodash-es";

/**
 * 获取实时时间
 * @param format 时间格式
 * @returns
 */
export function useClock(format: string = "YYYY-MM-DD HH:mm:ss") {
  const timer = ref<any>();
  const clock = ref("");

  function setClock() {
    clock.value = dayjs().format(format);
    timer.value = setTimeout(() => {
      setClock();
    }, 1000);
  }

  setClock();

  // 清除定时器
  onUnmounted(() => {
    if (timer.value) {
      clearTimeout(timer.value);
    }
  });

  return clock;
}

// 验证码倒计时
export function useCountdown(seconds: number) {
  const current = ref();
  const isCounting = computed(() => current.value > 0);
  let timer: number;

  function startCountdown() {
    current.value = seconds;
    timer = window.setInterval(() => {
      current.value--;
      if (current.value <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  onScopeDispose(() => {
    if (timer) {
      clearInterval(timer);
    }
  });

  return { startCountdown, isCounting, current };
}

export function useVModel(props: any, propName: string, emit: any) {
  const value = computed({
    get() {
      return props[propName];
    },
    set(value) {
      emit(`update:${propName}`, value);
    },
  });

  return value;
}

/**
 * table 组件的分页组合式函数
 * @param handleChange 分页发生变化时你需要执行的函数（请求table数据的函数）
 * @param options table pagination 配置项
 * @returns
 */
export function useTablePagination(handleChange: () => void, options = {}) {
  const pagination = reactive({
    current: 1,
    pageSize: 10,
    total: 0,
    onChange,
    ...options,
  });

  function onChange(current: number, pageSize: number) {
    pagination.current = current;
    pagination.pageSize = pageSize;
    handleChange();
  }

  return pagination;
}

/**
 * table 组件的选择组合式函数
 * @param options rowSelection 选项
 * @returns
 */
export function useTableRowSelection(options = {}) {
  const rowSelection = reactive({
    selectedRowKeys: [] as number[],
    selectedRows: [] as any[],
    onChange,
    ...options,
  });
  function onChange(rowKeys: number[], rows: any[]) {
    rowSelection.selectedRowKeys = rowKeys;
    rowSelection.selectedRows = rows;
  }
  return rowSelection;
}

/**
 * table 组件滚动到底部
 * @param tableRef
 * @param onScroll
 */
export function useTableScroll(tableRef: Ref, onScroll: () => void) {
  // 定义滚动函数
  function handleScroll() {
    const tableContainer = tableRef.value.$el.querySelector(".ant-table-body");
    const scrollPosition = tableContainer.scrollTop;
    const isTop = scrollPosition === 0;
    const isBottom = tableContainer.scrollHeight - scrollPosition === tableContainer.clientHeight;
    if (isTop) {
      console.log("重新加载");
    }
    if (isBottom) {
      console.log("加载更多");
      onScroll();
    }
  }

  // 添加scroll监听
  onMounted(() => {
    nextTick(() => {
      if (tableRef.value) {
        const tableContainer = tableRef.value.$el.querySelector(".ant-table-body");
        tableContainer.addEventListener("scroll", handleScroll);
      }
    });
  });

  // 移除scroll监听
  onBeforeUnmount(() => {
    nextTick(() => {
      if (tableRef.value) {
        const tableContainer = tableRef.value.$el.querySelector(".ant-table-body");
        tableContainer.removeEventListener("scroll", handleScroll);
      }
    });
  });
}

/**
 * 是否滚动到底部的组合式函数
 * @param scrollContainerRef 滚动元素
 * @param onBottom 滚到底部的回调函数
 * @returns
 */
export function useScrollToBottom(scrollContainerRef: Ref, onBottom?: () => void) {
  const isAtBottom = ref(false);
  function handleScroll() {
    if (!scrollContainerRef.value) return;

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#determine_if_an_element_has_been_totally_scrolled
    const { scrollHeight, clientHeight, scrollTop } = scrollContainerRef.value;
    if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
      console.log("滚动到底部了");
      isAtBottom.value = true;
      onBottom && onBottom();
    } else {
      isAtBottom.value = false;
    }
  }

  // 添加监听
  onMounted(async () => {
    await nextTick();
    if (scrollContainerRef.value) {
      scrollContainerRef.value.addEventListener("scroll", handleScroll);
    }
  });
  // 移除监听
  onBeforeUnmount(async () => {
    await nextTick();
    if (scrollContainerRef.value) {
      scrollContainerRef.value.removeEventListener("scroll");
    }
  });

  return { isAtBottom };
}

/**
 * 控制并发数量的函数
 * @param fn 异步函数
 * @param concurrency 并发数量
 * @returns
 */
export function useQueue<T>(fn: (item: T) => Promise<any>, concurrency = 1) {
  const queue: T[] = [];
  const taskMap = new Map();

  function createTask(queueItem: T) {
    const task = fn(queueItem);
    taskMap.set(task, task);

    task.finally(() => {
      // 移除已经完成的任务
      taskMap.delete(task);

      // 创建新的任务
      if (queue.length > 0) {
        const item = queue.shift();
        if (item) createTask(item);
      }
    });
  }
  function start() {
    const size = taskMap.size;
    const diff = concurrency - size;
    if (diff === 0) return;

    const items = queue.splice(0, concurrency);
    items.forEach((item) => createTask(item));
  }
  function addToQueue(item: T) {
    const isEmpty = queue.length === 0;
    queue.push(item);
    if (isEmpty) setTimeout(() => start()); // 放在宏任务队列中，等addToQueue完成后执行
  }

  return { addToQueue };
}
