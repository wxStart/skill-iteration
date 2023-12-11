<template>
  <div :class="$style.root">wx &copy; 2023 ~ {{ nowYear }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const nowYear = ref(new Date().getFullYear());
</script>

<style module lang="scss">
.root {
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: rgba($color: #000000, $alpha: 0.45);
  color: #fff;
}
</style>
