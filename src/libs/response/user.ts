import { UserRegisterStatus } from '../../modules/user/user.enum';

export interface IUserLoginResponse {
  registerStatus: UserRegisterStatus;
  openid: string;
}

export interface IUserRegisterResponse {
  token: string;
  mobile?: string;
  openid?: string;
}
