<template>
  <el-card shadow="hover">
    <div :class="$style.item" @click="toHospital">
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
import { type HospitalItem } from "@/api/home/type";
import { useRouter } from "vue-router";

const props = defineProps(["item"]);
const item: HospitalItem = props.item;

const router = useRouter();

const toHospital = () => {
  router.push("/hospital/registration");
};
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
@/api/home/type