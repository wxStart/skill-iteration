<template>
  <div>
    <el-button type="primary">主要按钮</el-button>
  </div>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage4"
    :page-sizes="[100, 200, 300, 400]"
    :page-size="100"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
  >
  </el-pagination>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const handleSizeChange = (val: number) => {
  console.log(`每页 ${val} 条`)
}
const handleCurrentChange = (val: number) => {
  console.log(`当前页: ${val}`)
}
const currentPage4 = ref(3)
</script>

<style scoped></style>
