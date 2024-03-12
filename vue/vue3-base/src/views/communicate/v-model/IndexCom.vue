<script setup lang="ts">
import { ref } from 'vue'
import ChildCom from './components/ChildCom.vue'

const number = ref(0)
const size = ref(0)

//
</script>

<template>
  <h3>ref-parent</h3>
  <div>number:{{ number }},size:{{ size }}</div>
  <br />
  <ChildCom> </ChildCom>
</template>

<style scoped></style>
