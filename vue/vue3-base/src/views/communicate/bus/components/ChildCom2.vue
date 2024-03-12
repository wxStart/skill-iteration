<template>
  <div>
    <h4>child 2</h4>
    <button @click="onClick">给child1发送数据</button>
  </div>
</template>

<script setup lang="ts">
import $bus from '../bus'
$bus.on('add2', (e: unknown) => {
  console.log('e2222: ', e)
})

const onClick = function () {
  $bus.emit('add1', {
    name: '小爱同学2',
    age: 12
  })
}
</script>

<style scoped></style>
