<template>
  <div>
    <div>name:{{ info.name }}</div>
    <div>age:{{ info.age }}</div>
    <button @click="changeInfo">改变数据</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  info: { name: string; age: Number }
  changeInfo: (payload: MouseEvent) => void
}>()
</script>

<style scoped></style>
