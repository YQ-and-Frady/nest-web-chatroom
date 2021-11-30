import { Injectable } from '@nestjs/common';
import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
} from './user.interface';
// import { Connection } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor() {}

  async register(params: IRegisterRequest): Promise<any> {
    console.log('user register: ', params);

    // const userRepo = this.connection.getRepository(UserEntity);
    // const user = userRepo.create(params);
    // const result = await userRepo.save(user);
    return '44';
  }
  login(params: ILoginRequest): ILoginResponse {
    return {
      token: params.password,
    };
  }
}
