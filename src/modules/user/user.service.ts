import { Inject, Injectable } from '@nestjs/common';
import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
} from './user.interface';
// import { Connection } from 'typeorm';
import { UserEntity } from './user.entity';
import { USER_REPOSITORY } from '../../constants';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async register(params: IRegisterRequest): Promise<any> {
    console.log('user register: ', params);
    return this.userRepository.insert(params);
  }
  login(params: ILoginRequest): ILoginResponse {
    return {
      token: params.password,
    };
  }
}
