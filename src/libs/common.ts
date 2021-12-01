/**
 * 返回结构体
 */
export interface IHttpResponse<Data> {
  code: 2000;
  data: Data;
  msg: string;
}
