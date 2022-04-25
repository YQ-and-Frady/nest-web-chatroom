import { Inject, Injectable } from '@nestjs/common';
import { IRegisterRequest, RegisterDto } from './user.interface';
import { UserEntity } from './user.entity';
import { USER_REPOSITORY } from '../../constants';
import { Repository } from 'typeorm';
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

  /**
   * 从微信获取登录信息
   * @param js_code
   */
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

  /**
   * 查找用户信息（或报错）
   * @param openid
   */
  async userFindOneOrFail(openid: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ openid });
    if (!user) {
      throw new Error('报错了');
    }
    return user;
  }

  /**
   * 创建用户
   * @param openid
   */
  async creatUser(openid: string): Promise<void> {
    const user = this.userRepository.create({ openid, mobile: '' });
    await this.userRepository.save(user);
  }

  /**
   * 更新用户
   * @param registerDto
   */
  async updateUser(registerDto: RegisterDto): Promise<void> {
    try {
      const user = await this.userFindOneOrFail(registerDto.openid);
      user.mobile = registerDto.mobile;
      await this.userRepository.update(user.id, user);
    } catch (e) {
      throw new Error('找不到openid');
    }
  }

  // generateJWT(jwtSavedInfo: IJWTSavedInfo): string {
  //   return this.jwt.sign(jwtSavedInfo, config.secret, {
  //     expiresIn: config.expiresIn
  //   })
  // }
}
