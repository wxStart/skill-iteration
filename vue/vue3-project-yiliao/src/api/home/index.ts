/**
 * 统一首页接口管理
 */
import request from "@/uitls/request";
import { type queryListsParam, HospitalResponse } from "./type";

enum API {
  HOSPITAL_LIST = "/hospital.json",
}

export const reqHospitalLists = (params: queryListsParam) => {
  return request.get<any, HospitalResponse>(API.HOSPITAL_LIST, { params });
};
