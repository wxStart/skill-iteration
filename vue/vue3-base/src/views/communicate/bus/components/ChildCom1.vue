<template>
  <div>
    <h4>child 1</h4>
    <button @click="onClick">给child2发送数据</button>
  </div>
</template>

<script setup lang="ts">
import $bus from '../bus'
$bus.on('add1', (e: unknown) => {
  console.log('e111: ', e)
})

const onClick = function () {
  $bus.emit('add2', {
    name: '小爱同学1',
    age: 12
  })
}
</script>

<style scoped></style>
