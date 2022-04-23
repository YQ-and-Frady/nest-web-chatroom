import { Inject, Injectable } from '@nestjs/common';
import { ILoginRequest, IRegisterRequest } from './user.interface';
import { UserEntity } from './user.entity';
import { USER_REPOSITORY } from '../../constants';
import { Repository } from 'typeorm';
import { IUserLoginResponse } from '../../libs/response/user';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: Repository<UserEntity>,
    private httpService: HttpService,
  ) {}

  async register(params: IRegisterRequest): Promise<any> {
    return this.userRepository.insert(params);
  }

  async getInfoFromWx(js_code: string): Promise<any> {
    const response = await lastValueFrom(
      this.httpService.get('https://api.weixin.qq.com/sns/jscode2session', {
        params: {
          js_code,
          appid: 'wxf9206d54d1215738',
          secret: 'be0b987febdcf60418bda8277d5dce73',
          grant_type: 'authorization_code',
        },
      }),
    );
    return response.data;
  }

  async userFindOneOrFail(openid: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ openid });
    if (!user) {
      throw '报错了';
    }
    return user;
  }

  async creatUser(openid: string): Promise<void> {
    const user = this.userRepository.create({ openid, mobile: '' });
    await this.userRepository.save(user);
  }
}
