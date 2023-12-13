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
import type { HospitalResponse, HospitalLists } from "@/api/home/type";
import { reqHospitalLists } from "@/api/home/index";

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
}

const restaurants = ref<RestaurantItem[]>([]);

const querySearch = async (queryString: string, cb: any) => {
  const results = await queryHospitals(queryString);
  cb(results);
};

const queryHospitals = async (kw?: string) => {
  const params = { page: 1, pageSize: 1000 };
  const result: HospitalResponse = await reqHospitalLists(params);
  if (result.ok) {
    let lists: HospitalLists = (result.data && result.data.lists) || [];
    if (kw) {
      lists = lists.filter((el) => el.hospitalName.indexOf(kw) > -1);
    }
    return lists.map((el) => ({
      value: el.hospitalName,
    }));
  } else {
    return [] as RestaurantItem[];
  }
};

// const handleSelect = (item: RestaurantItem) => {
//   console.log(item)
// }

const onSearch = () => {
  // console.log("input.value: ", input.value);
  emit("onSearch", input.value);
};

onMounted(async () => {
  restaurants.value = await queryHospitals();
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
