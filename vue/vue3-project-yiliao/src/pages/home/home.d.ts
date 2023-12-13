
// 接口返回结构

/**
 * @name  接口返回主题基本
 * @description  封装的接口响应返回体
 * @param ok    数据可用为true， 异常为false
 * @param code  成功的code
 * @param status http的状态码
 * @param error 错误信息提示  ok为false使用
 * @param message 错误信息消息  ok为false使用
 */
export interface ResponseData {
  ok: boolean;
  code?: number;
  status?: number;
  error?: string;
  message?: string;
}

/**
 * @name  医院对象
 * @description   描述医院的对象
 * @param hospitalName   医院名字
 * @param logo  医院logo
 * @param tags  医院的标签
 * @param area  医院所在区域
 */
export interface HospitalItem {
  hospitalName: string;
  logo: string;
  tags: string[];
  area: string;
  [props: string]: any;
}

// 医院对象数组
export type HospitalLists = HospitalItem[];


/**
 * @name  医院列表接口返回体
 * @description  封装的接口响应返回体
 * @param data 返回的数据
 * @param data.lists  分页数据 HospitalLists
 * @param data.total  总数据数量
 * @param ok    数据可用为true， 异常为false
 * @param code  成功的code
 * @param status http的状态码
 * @param error 错误信息提示  ok为false使用
 * @param message 错误信息消息  ok为false使用
 */
export interface HospitalResponse extends ResponseData {
  data: {
    lists: HospitalLists;
    total?: number;
  };
}
