import { UserRegisterStatus } from '../../modules/user/user.enum';

export interface IUserLoginResponse {
  registerStatus: UserRegisterStatus;
  token: string;
}

export interface IUserRegisterResponse {
  token: string;
  mobile?: string;
  openid?: string;
}
