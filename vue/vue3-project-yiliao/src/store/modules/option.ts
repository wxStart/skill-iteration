// 选项式的
import { defineStore } from "pinia";

const delay = (time = 2000) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const useOptionStore = defineStore("option", {
  state: () => {
    return { count: 0 };
  },
  actions: {
    increment() {
      console.log(111);
      this.count++;
    },
    async asyncIncrement(step = 5) {
      await delay();
      this.count += step;
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});

export default useOptionStore;
