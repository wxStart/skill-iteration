// 组合式

import { defineStore } from "pinia";

import { reactive } from "vue";

import { type HospitalItem } from "@/api/home/type";

export type Hospital = HospitalItem | {};

export type CommonHospitalData = {
  activeHospital: Hospital;
};
export const useCommonHospitalStore = defineStore("hospital-common", () => {
  let commonHospital: CommonHospitalData = reactive({
    activeHospital: {},
  });

  function setActiveHospital(hospital: Hospital) {
    console.log('hospital: ', hospital);
    commonHospital.activeHospital = hospital;
  }

  return { commonHospital, setActiveHospital };
});
