import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginDto, RegisterDto } from './user.interface';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';
import { IHttpResponse } from '../../libs/common';
import {
  IUserLoginResponse,
  IUserRegisterResponse,
} from '../../libs/response/user';
import { UserEntity } from './user.entity';
import { UserRegisterStatus } from './user.enum';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: '注册用户' })
  @Post('/register')
  @HttpCode(200)
  async register(
    @Body() form: RegisterDto,
  ): Promise<IHttpResponse<IUserRegisterResponse>> {
    return await this.userService.register(form);
  }

  @ApiOperation({ summary: '登录' })
  @Post('/login')
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto): Promise<IUserLoginResponse> {
    const { openid } = await this.userService.getInfoFromWx(loginDto.js_code);
    let user: UserEntity;
    try {
      user = await this.userService.userFindOneOrFail(openid);
    } catch (e) {
      await this.userService.creatUser(openid);
      user = await this.userService.userFindOneOrFail(openid);
    }
    if (user.mobile) {
      return {
        registerStatus: UserRegisterStatus.Register,
        openid: user.openid,
      };
    } else {
      return {
        registerStatus: UserRegisterStatus.NeedMobile,
        openid: user.openid,
      };
    }
  }
}
