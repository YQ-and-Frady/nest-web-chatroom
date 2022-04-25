/**
 * 返回结构体
 */
import { ResponseCode } from './response-code';

export interface IHttpResponse<Data> {
  code: ResponseCode;
  data: Data;
  msg: string;
}

/**
 * http异常的抛出
 */
export interface IHttpExceptionResponse {
  data?: any;
  msg?: string;
}
