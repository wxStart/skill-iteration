<script setup lang="ts">
// pinia 是vue3中的数据管理
/**
 * 核心概念：
 * state
 * actions
 * getters
 */
import ChildCom from './components/ChildCom.vue'
import { useOptionsStore } from './store/options'
import { useSetupStore } from './store/setup'
const optionsStore = useOptionsStore()
console.log('optionsStore: ', optionsStore)
const setupStore = useSetupStore()
</script>

<template>
  <h3>pinia</h3>

  <div>pinia中的data：{{ optionsStore.number }}</div>
  <div>pinia中的data getters：{{ optionsStore.preNumer }}</div>
  <button @click="optionsStore.$patch({ number: optionsStore.number + 10 })">改变+10</button>
  <button @click="optionsStore.changeNumber(-10)">改变-10</button>
  <hr />

  <div>pinia中 setup的data：{{ setupStore.lists }}</div>
  <div>pinia中 setup的data：{{ setupStore.ids }}</div>
  <button @click="setupStore.updateTodo()">改变setupStore</button>
  <hr />
  <ChildCom />
</template>

<style scoped></style>
