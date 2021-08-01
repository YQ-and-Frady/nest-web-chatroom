export interface returnJson {
  name: string;
  mobile: number;
  code?: number;
}

export interface IRegisterRequest {
  username: string;
  gender: string;
  mobile: string;
  password: string;
}

export interface ILoginRequest {
  mobile: number;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IBaseResponse<T> {
  msg: string;
  code: number;
  data: T;
}
