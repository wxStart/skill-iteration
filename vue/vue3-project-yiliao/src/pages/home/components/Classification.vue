<template>
  <div :class="$style.root">
    <h1>医院</h1>
    <div :class="$style.item">
      <div :class="$style.left">等级:</div>
      <div :class="$style.right">
        <ul :class="$style.btns">
          <li
            v-for="list in levelLists"
            :key="list.id"
            :class="{ [$style.btn]: true, [$style.active]: list.id == level }"
            @click="onChangeLevel(list.id)"
          >
            {{ list.name }}
          </li>
        </ul>
      </div>
    </div>
    <div :class="$style.item">
      <div :class="$style.left">地区:</div>
      <div :class="$style.right">
        <ul :class="$style.btns">
          <li
            v-for="list in regionLists"
            :key="list.id"
            :class="{ [$style.btn]: true, [$style.active]: list.id == region }"
            @click="onChangeRegion(list.id)"
          >
            {{ list.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["change"]);
let levelLists = ref([
  {
    id: "all",
    name: "全部",
  },
  {
    id: "三甲",
    name: "三甲医院",
  },
  {
    id: "三乙",
    name: "三乙医院",
  },
  {
    id: "三级医院",
    name: "三级医院",
  },
]);

let regionLists = ref([
  {
    id: "all",
    name: "全部",
  },
  {
    id: "浦东新区",
    name: "浦东新区",
  },
  {
    id: "虹口区",
    name: "虹口区",
  },
  {
    id: "长宁区",
    name: "长宁区",
  },
  {
    id: "松江区",
    name: "松江区",
  },
  {
    id: "徐汇",
    name: "徐汇",
  },
]);

const level = ref<string>("all");

const region = ref<string>("all");

const onChangeLevel = (id: string) => {
  level.value = id;
  emit("change", {
    level: id,
    region: region.value,
  });
};
const onChangeRegion = (id: string) => {
  region.value = id;
  emit("change", {
    level: level.value,
    region: id,
  });
};
</script>

<style module lang="scss">
.root {
  h1 {
    font-size: 24px;
    color: #222;
    margin: 0 0 12px;
  }
  .item {
    display: flex;
    line-height: 32px;
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }

    .left {
      width: 64px;
      font-size: 18px;
    }
    .right {
      flex: 1 0 20px;
    }
    .btns {
      display: flex;
      flex-wrap: wrap;
    }
    .btn {
      padding: 0 8px;
      margin: 0 8px 4px;
      color: #343434;
      cursor: pointer;
      &.active,
      &:hover {
        color: rgb(241, 19, 19);
      }
    }
  }
}
</style>
