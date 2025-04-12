import { defineStore } from "pinia";
import { getDictList } from "@/api/common";

type Dict = {
  options: { label: string; value: string | number }[];
  map: Record<string, string | number>;
};

export const useDictStore = defineStore("dict", {
  state() {
    return {
      initialized: false,
      dictMap: {} as Record<string, Dict>,
    };
  },
  actions: {
    async initDict() {
      if (this.initialized) return;

      const data = getDictList();
      data.forEach((item) => {});
    },
  },
});
