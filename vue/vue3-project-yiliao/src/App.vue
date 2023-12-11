<script setup lang="ts">
  // import 
</script>

<template>
  <div :class="$style.root">
    <hospital-top />
    <div :class="$style.content">
      <router-view></router-view>
    </div>
    <hospital-bottom />
  </div>
</template>

<style module lang="scss">
.root {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
  .content {
    flex: 1 0 30px;
  }
}
</style>
