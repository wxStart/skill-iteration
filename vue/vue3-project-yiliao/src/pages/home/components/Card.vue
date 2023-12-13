<template>
  <el-card shadow="hover">
    <div :class="$style.item">
      <img :class="$style.logo" :src="item.logo" :alt="item.hospitalName" />
      <div :class="$style.content">
        <div>{{ item.hospitalName }}</div>
        <div>{{ item.area }}</div>
        <div>
          <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import type { HospitalItem } from "../home.d.ts";
const props = defineProps(["item"]);

const item: HospitalItem = props.item;

</script>

<style module lang="scss">
.item {
  display: flex;
  justify-content: space-between;
  .logo {
    width: 40px;
    height: 40px;
  }
  .content {
    margin-left: 24px;
    flex: 1 0 30px;
    > div {
      margin-bottom: 8px;
    }
    span {
      display: inline-block;
      margin-right: 8px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
}
</style>
