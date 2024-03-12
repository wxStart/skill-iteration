<template>
  <div>
    <h4>child</h4>
    <div>number：{{ number }}</div>
    <div>size：{{ size }}</div>
    <button @click="onClick">改变父亲中的值</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['number', 'size'])
const $emit = defineEmits(['update:number', 'update:size'])
const onClick = function () {
  $emit('update:number', props.number + 10)
  $emit('update:size', props.size + 11)
}
</script>

<style scoped></style>
