<template>
  <div>lists: {{ lists }}</div>
  <ul>
    <li v-for="list in lists" :key="list.name">
      <slot :item="list"></slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const lists = reactive([{ name: 'wx' }, { name: 'wx1' }])
</script>

<style scoped></style>
