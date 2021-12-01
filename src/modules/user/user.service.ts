import { Inject, Injectable } from '@nestjs/common';
import { ILoginRequest, IRegisterRequest } from './user.interface';
import { UserEntity } from './user.entity';
import { USER_REPOSITORY } from '../../constants';
import { Repository } from 'typeorm';
import { IUserLoginResponse } from '../../libs/response/user';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async register(params: IRegisterRequest): Promise<any> {
    return this.userRepository.insert(params);
  }

  login(params: ILoginRequest): IUserLoginResponse {
    return {
      token: params.password,
      mobile: '',
    };
  }
}
