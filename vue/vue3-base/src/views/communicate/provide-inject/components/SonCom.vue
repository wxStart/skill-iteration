<template>
  <div>son</div>
  <div>number:{{ number }}</div>
  <div>object1:{{ object1 }}</div>
  <div>info:{{ info }}</div>
  <div>refPnumber:{{ refPnumber }}</div>
  <button @click="changeInfo">改变</button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
const number = inject('number')
const object1 = inject('object1')
const info = inject('info')
const refPnumber = inject('refPnumber')
const changeInfo = inject('changeInfo') as (payload: MouseEvent) => void
</script>

<style scoped></style>
