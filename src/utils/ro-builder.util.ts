import { ResponseCode } from '../libs/response-code';
import { IHttpResponse } from '../libs/common';

function responseBuilder<T>(
  code: ResponseCode,
  data: T,
  msg = '',
): IHttpResponse<T> {
  return {
    code,
    data,
    msg,
  };
}

export function successResponse<T>(data?: T, msg?: string): IHttpResponse<T> {
  return responseBuilder(ResponseCode.Success, data, msg);
}

/**
 * 失败消息
 * @param code
 * @param msg
 * @param data
 */
export function errorResponse<T>(
  code: ResponseCode,
  msg?: string,
  data: T = null,
): IHttpResponse<T> {
  return responseBuilder(code, data, msg);
}
