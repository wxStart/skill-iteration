<template>
  <div :class="$style.root">
    <div :class="$style.menu">
      <el-menu
        router
        :default-active="route.path"
        class="el-menu-vertical-demo"
      >
        <el-menu-item
          index="/hospital/registration"
          @click="changeRouter('/hospital/registration')"
        >
          <el-icon><icon-menu /></el-icon>
          <span>我的预约</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/details"
          @click="changeRouter('/hospital/details')"
        >
          <el-icon><InfoFilled /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <!-- <el-menu-item index="3">
          <el-icon><Comment /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon><Message /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item> -->
      </el-menu>
    </div>
    <div :class="$style.content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  InfoFilled,
  //   Comment,
  Menu as IconMenu,
  //   Message,
  //   Search,
} from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";

let router = useRouter();
let route = useRoute();
console.log("route: ", route);
console.log("router: ", router);

const changeRouter = (path: string) => {
  console.log("path: ", path);
  router.push(path);
};
</script>

<style module lang="scss">
.root {
  display: flex;
  .menu {
    flex: 2 0 auto;
  }
  .content {
    flex: 8 0 auto;
  }
}
</style>
