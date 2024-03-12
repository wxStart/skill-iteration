<script setup lang="ts">
import ChildCom1 from './components/ChildCom1.vue'
import ChildCom2 from './components/ChildCom2.vue'
</script>

<template>
  <h3>defineEmits</h3>
  <div class="box">
    <ChildCom1 />
    <ChildCom2 />
  </div>
</template>

<style scoped>
.box {
  display: flex;
  justify-content: space-between;
}
</style>
