<script setup lang="ts">
import { ref, reactive, provide } from 'vue'
import ChildCom from './components/ChildCom.vue'

const info = reactive({ name: 'wahaha', age: 12 })
const refPnumber = ref(10)
const changeInfo = () => {
  info.name += '~'
  info.age += 5
  refPnumber.value += 10
}

provide('info', info)
provide('refPnumber', refPnumber)
provide('changeInfo', changeInfo)
</script>

<template>
  <h3>Provide 和 Inject</h3>
  <ChildCom> </ChildCom>
</template>

<style scoped></style>
