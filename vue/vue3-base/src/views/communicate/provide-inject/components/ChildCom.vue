<template>
  <div>child</div>
  <br />
  <SonCom />
</template>

<script setup lang="ts">
import { ref, reactive, provide } from 'vue'
import SonCom from './SonCom.vue'
const number = ref(10)
const object1 = reactive({
  name: 'xxx'
})

provide('number', number)
provide('object1', object1)
</script>

<style scoped></style>
