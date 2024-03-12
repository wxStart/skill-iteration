<template>
  <div>
    <div>piina 中的 data:{{ optionsStore.preNumer }}</div>
  </div>
</template>

<script setup lang="ts">
import { useOptionsStore } from '../store/options'

const optionsStore = useOptionsStore()
</script>

<style scoped></style>
