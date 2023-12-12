<template>
  <div :class="$style.root">
    <el-autocomplete
      v-model="input"
      :class="$style.search"
      :fetch-suggestions="querySearch"
      clearable
      :placeholder="props.placeholder"
    />
    <el-button
      :class="$style.btn"
      :icon="Search"
      type="primary"
      @click="onSearch"
      >搜索</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Search } from "@element-plus/icons-vue";

export interface Props {
  placeholder: string;
  msg?: string;
  labels?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  // placeholder: "请输入",
  msg: "hello",
  labels: () => ["one", "two"],
});

// 基于类型
const emit = defineEmits<{
  onSearch: [value: string];
}>();

const input = ref("");

interface RestaurantItem {
  value: string;
  link: string;
}

const restaurants = ref<RestaurantItem[]>([]);

const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value;
  // call callback function to return suggestions
  cb(results);
};

const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};

const loadAll = () => {
  return [
    { value: "vue", link: "https://github.com/vuejs/vue" },
    { value: "element", link: "https://github.com/ElemeFE/element" },
    { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
    { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
    { value: "vuex", link: "https://github.com/vuejs/vuex" },
    { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
    { value: "babel", link: "https://github.com/babel/babel" },
  ];
};

// const handleSelect = (item: RestaurantItem) => {
//   console.log(item)
// }

const onSearch = () => {
  // console.log("input.value: ", input.value);
  emit("onSearch", input.value);
};



onMounted(() => {
  restaurants.value = loadAll();
});
</script>

<style module lang="scss">
.root {
  margin: 15px 0;
  text-align: center;
  .search {
    width: 600px;
    height: 40px;
    :global {
      .el-input__inner {
        --el-input-height: 40px;
      }
    }
  }
  .btn {
    height: 40px;
    margin-left: 12px;
  }
}
</style>
