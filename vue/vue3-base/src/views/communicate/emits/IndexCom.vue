<script setup lang="ts">
import { reactive } from 'vue'
import ChildCom from './components/ChildCom.vue'

const info = reactive({ name: 'wahaha', age: 12 })
const changeInfo = (data: unknown): void => {
  console.log('data: ', data)
  info.name += '~!'
  info.age += 1
}
</script>

<template>
  <h3>defineEmits</h3>
  <ChildCom
    :info="info"
    @on-click="changeInfo"
    @click="
      () => {
        console.log('因为子组件中，emits没有声明click，所以是原生事件')
      }
    "
  >
  </ChildCom>
</template>

<style scoped></style>
