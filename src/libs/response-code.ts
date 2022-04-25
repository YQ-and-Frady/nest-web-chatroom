/**
 * 请求响应码
 */
export const enum ResponseCode {
  Success = 1000, // 成功
  UserNotFound = 1001, // 无法找到用户
  WeixinError = 5555, // 微信 - 错误
  UnKnowError = 9999, // 未知错误
}
