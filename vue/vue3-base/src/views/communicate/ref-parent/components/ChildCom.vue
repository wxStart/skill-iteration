<template>
  <div>
    <h4>child</h4>
    <div>child中的number：{{ number }}</div>
    <!--  $parent 参数是获取父组件 -->
    <button @click="onClick($parent)">改变父亲中的值-10</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const number = ref(10)
const onClick = function ($parent: any) {
  console.log('$parent: ', $parent)
  $parent.number -= 10
  // $parent.onChange()
}
const play = () => {
  console.log('play: 我是child中的play 方法')
}

// 暴露出去才可以使用
defineExpose({
  number,
  play
})
</script>

<style scoped></style>
