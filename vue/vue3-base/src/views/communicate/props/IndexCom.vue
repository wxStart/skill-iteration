<script setup lang="ts">
import { reactive } from 'vue'
import ChildCom from './components/ChildCom.vue'

const info = reactive({ name: 'wahaha', age: 12 })
const changeInfo = (): void => {
  info.name += '~!'
  info.age += 1
}
</script>

<template>
  <h3>defineProps</h3>
  <ChildCom :info="info" :changeInfo="changeInfo"> </ChildCom>
</template>

<style scoped></style>
