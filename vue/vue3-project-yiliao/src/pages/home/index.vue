<template>
  <div :class="$style.root">
    <Carousel />
    <Search placeholder="请输入医院名称/代号" @onSearch="onChangeKw" />
    <el-row>
      <el-col :span="18">
        <Classification @change="onChangeClassification" />
        <div :class="$style.hospital">
          <Card
            v-for="item in data.hospitals"
            :key="((item as unknown) as HospitalItem).hospitalName"
            :class="$style.item"
            :item="item"
          />
        </div>
        <el-pagination
          hide-on-single-page
          background
          layout="total, prev, pager, next"
          :page-size="data.pageSize"
          :total="data.total"
          @current-change="handleCurrentChange"
        />
        <!-- <el-pagination small layout="prev, pager, next" :total="50" /> -->
      </el-col>
      <el-col :span="6">11</el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from "./components/Carousel.vue";
import Search from "./components/Search.vue";
import Classification from "./components/Classification.vue";
import Card from "./components/Card.vue";
import { onMounted, reactive } from "vue";

// import jsonData from "./hospital.json";

import type { HospitalItem } from "./home.d.ts";
import request, { type ResponseResult } from "@/uitls/request";

interface ClassificationRes {
  level: string;
  region: string;
}

interface queryListsParam {
  kw: string;
  level: string;
  region: string;
  page: number;
  pageSize: number;
}

const data = reactive({
  kw: "",
  level: "all",
  region: "all",
  hospitals: [],
  total: 0,
  page: 1,
  pageSize: 2,
});

const onSearch = async (): Promise<void> => {
  const { kw, level, region, page, pageSize } = data;
  const params = {
    kw,
    level,
    region,
    page,
    pageSize,
  };
  console.log(params);
  let { lists, total } = await queryHospitals(params);
  data.total = total;
  (data.hospitals as HospitalItem[]) = lists;
};

const queryHospitals = async (params: queryListsParam) => {
  const { kw, level, region, page, pageSize } = params;
  const result: ResponseResult = await request.get("/hospital.json");
  if (result.ok) {
    let lists: HospitalItem[] = result.data.lists;

    if (kw) {
      lists = lists.filter((el) => el.hospitalName.indexOf(kw) > -1);
    }
    if (level !== "all") {
      lists = lists.filter((el) => el.tags.includes(level));
    }
    if (region !== "all") {
      lists = lists.filter((el) => el.area == region);
    }
    const startIndex = (page - 1) * pageSize;
    const len = lists.length;
    if (len >= startIndex) {
      lists = lists.slice(startIndex, startIndex + pageSize);
    }
    return { total: len, lists: lists, page, pageSize };
  } else {

    return { total: 0, lists: [], page, pageSize };
  }
};

const onChangeKw = (kw: string): void => {
  data.kw = kw;
  onSearch();
};

const onChangeClassification = (params: ClassificationRes): void => {
  data.level = params.level;
  data.region = params.region;
  onSearch();
};

const handleCurrentChange = (val: number) => {
  data.page = val;
  onSearch();
};

onMounted(async () => {
  onSearch();
});
</script>

<style module lang="scss">
.root {
  height: 100%;
  overflow: hidden;
  overflow-y: auto;

  .hospital {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      width: 48%;
      margin: 10px 0;
    }
  }
}
</style>
