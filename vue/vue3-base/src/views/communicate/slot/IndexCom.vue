<script setup lang="ts">
import ChildCom from './components/ChildCom.vue'

//
</script>

<template>
  <h3>slot 接受子组件传过来的 值</h3>

  <ChildCom>
    <template v-slot="{ item }">
      <div>item.name: {{ item.name }}</div>
    </template>
  </ChildCom>
</template>

<style scoped></style>
