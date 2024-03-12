<template>
  <div>
    <div>name:{{ info.name }}</div>
    <div>age:{{ info.age }}</div>
    <button @click="onClick">改变数据</button>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
defineProps<{
  info: { name: string; age: Number }
}>()
const $emits = defineEmits(['on-click'])

const onClick = function () {
  $emits('on-click', 'data')
}
</script>

<style scoped></style>
