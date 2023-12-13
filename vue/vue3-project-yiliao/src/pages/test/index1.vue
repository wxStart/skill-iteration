<template>
  <div :class="$style.root">
    <h1>pinia1 数据共享测试页（类似vuex）</h1>

    <div>count:{{ count }}</div>
    <div>doubleCount:{{ doubleCount }}</div>
    <el-button type="primary" @click="increment">增加</el-button>

    <el-button type="primary" @click="asyncIncrement(5)">
      异步延迟2秒增加5
    </el-button>
    <el-button type="primary" @click="goPinia">去pinia2页面</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import { storeToRefs } from "pinia";
import useOptionStore from "@/store/modules/option";

const router = useRouter();

const store = useOptionStore();
// 直接结构这样写会失去响应式  应该是用storeToRefs
const { count, doubleCount } = storeToRefs(store);
const { increment, asyncIncrement } = store;

const goPinia = () => {
  router.push("/test2");
};
</script>

<style module lang="scss">
.root {
  line-height: 32px;
  h1 {
    font-size: 22px;
    font-weight: bolder;
  }
}
</style>
