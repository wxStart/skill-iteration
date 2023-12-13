<template>
  <div>
    我挂号的医院:
    {{ (commonHospital.activeHospital as HospitalItem).hospitalName }}
    <el-button type="primary" @click="increment">改变</el-button>
  </div>
</template>

<script setup lang="ts">
// import { storeToRefs } from "pinia";
import { type HospitalItem } from "@/api/home/type";
import { useCommonHospitalStore } from "@/store/modules/setup";

const store = useCommonHospitalStore();

const { commonHospital } = store; // commonHospital 是一个 Proxy(Object)
console.log('commonHospital: ', commonHospital);
const { setActiveHospital } = store;

const increment = () => {
  setActiveHospital({
    hospitalName: "复旦大学附属华山医院",
    depart: "",
    type: "综合",
    address: "上海市静安区乌鲁木齐中路12号",
    distance: "",
    province: "上海",
    city: "上海",
    area: "静安区",
    reason: "“有7个省市重点专科” “高校附属医院，科教研一体化”",
    tags: ["三甲", "全国医院第8", "医保定点", "综合医院"],
    logo: "https://med-fe.cdn.bcebos.com/hospital/logo/102883.png",
    labelText: [],
    honor: null,
    tagList: [
      {
        name: "公立三甲",
        selected: true,
        key: "level",
        value: "三甲",
      },
      {
        name: "可问诊",
        selected: true,
        key: "isWenzhen",
        value: "1",
      },
      {
        name: "可挂号",
        selected: true,
        key: "isGuahao",
        value: "1",
      },
    ],
    button: [
      {
        type: "1",
        text: "去挂号",
        url: "https://jiankang.baidu.com/med/pclp/template/#/wz/guahao?page=hospitaldetail&sf_ref=search_50557&title=复旦大学附属华山医院&hospital=复旦大学附属华山医院&hospital_id=KU3MTUOMHgoLycvMYIaRTw==&from=hospitaltjlist",
        swanUrl: "",
        tracedata: "guahao",
      },
    ],
    fudanRankAreaLoc: "华东区",
    unifiUrl: "https://health.baidu.com/doctordec/hospital/1004715",
    rankAreaCardUrl:
      "https://expert.baidu.com/med/template/#/pages/hospital/hospmain/index?distance=&frontDepartmentName=&hospital=%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6%E9%99%84%E5%B1%9E%E5%8D%8E%E5%B1%B1%E5%8C%BB%E9%99%A2&originalQuery=%E4%B8%8A%E6%B5%B7%E7%9A%84%E5%8C%BB%E9%99%A2&pd=med&rankType=0&resource_id=50390&sf_ref=search_50557&showDialog=1&title=%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6%E9%99%84%E5%B1%9E%E5%8D%8E%E5%B1%B1%E5%8C%BB%E9%99%A2&version=2&vn=med",
    rankAreaUrl:
      "/pages/hospital/hospmain/index?distance=&frontDepartmentName=&hospital=%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6%E9%99%84%E5%B1%9E%E5%8D%8E%E5%B1%B1%E5%8C%BB%E9%99%A2&originalQuery=%E4%B8%8A%E6%B5%B7%E7%9A%84%E5%8C%BB%E9%99%A2&pd=med&rankType=0&resource_id=50390&sf_ref=search_50557&showDialog=1&title=%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6%E9%99%84%E5%B1%9E%E5%8D%8E%E5%B1%B1%E5%8C%BB%E9%99%A2&version=2&vn=med",
    rankAreaSwanUrl:
      "http://VlKQRMSyT32ln2AG84dmTjW6qldpGsNk/pages/hospital/hospmain/index?distance=&frontDepartmentName=&hospital=%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6%E9%99%84%E5%B1%9E%E5%8D%8E%E5%B1%B1%E5%8C%BB%E9%99%A2&originalQuery=%E4%B8%8A%E6%B5%B7%E7%9A%84%E5%8C%BB%E9%99%A2&pd=med&rankType=0&resource_id=50390&sf_ref=search_50557&showDialog=1&title=%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6%E9%99%84%E5%B1%9E%E5%8D%8E%E5%B1%B1%E5%8C%BB%E9%99%A2&version=2&vn=med",
    swanUrl:
      "http://VlKQRMSyT32ln2AG84dmTjW6qldpGsNk/pages/hospital/hospmain/index?distance=&frontDepartmentName=&hospital=%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6%E9%99%84%E5%B1%9E%E5%8D%8E%E5%B1%B1%E5%8C%BB%E9%99%A2&originalQuery=%E4%B8%8A%E6%B5%B7%E7%9A%84%E5%8C%BB%E9%99%A2&pd=med&rankType=0&resource_id=50390&sf_ref=search_50557&showDialog=0&title=%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6%E9%99%84%E5%B1%9E%E5%8D%8E%E5%B1%B1%E5%8C%BB%E9%99%A2&version=2&vn=med",
    url: "https://health.baidu.com/doctordec/hospital/1004715",
    seoDepartmentUrl: "",
  });
};
</script>

<style module lang="scss"></style>
