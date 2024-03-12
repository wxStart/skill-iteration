<script setup lang="ts">
import { ref } from 'vue'
import ChildCom from './components/ChildCom.vue'

const number = ref(100)
//
const child = ref()
const onChange = function () {
  // console.log('son: ', child)
  child.value.number += 10
  child.value.play()
}
// 暴露出去 父组件和子组件都可以调用
defineExpose({
  number,
  onChange
})
</script>

<template>
  <h3>ref-parent</h3>
  <div>parent中的number:{{ number }},</div>
  <button @click="onChange">改变孩子number +10</button>
  <br />
  <ChildCom ref="child"> </ChildCom>
</template>

<style scoped></style>
