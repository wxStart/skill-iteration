<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.left">
        <div :class="$style.logo"></div>
        <div>(๑′ᴗ‵๑)Ｉ Lᵒᵛᵉᵧₒᵤ❤互联网挂号平台</div>
      </div>
      <div :class="$style.right">
        <div>帮助中心</div>
        <div>登录/注册</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style module lang="scss">
.container {
  width: 100%;
  height: 70px;
  background-color: #fff;
  color: #424242;
  display: flex;
  justify-content: center;
  line-height: 70px;
  .content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  .left {
    width: 40%;
    display: flex;
    .logo {
      width: 50px;
      height: 70px;
      background: url("@/assets/logo.png") no-repeat;
      background-size: contain;
      background-position: center;
      margin-right: 12px;
    }
  }

  .right {
    display: flex;
    div {
      &:last-child {
        margin-left: 12px;
      }
    }
  }
}
</style>
