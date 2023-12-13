
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
  