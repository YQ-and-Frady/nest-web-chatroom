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
import { successResponse } from '../../utils/ro-builder.util';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: '登录' })
  @Post('/login')
  @HttpCode(200)
  async login(
    @Body() loginDto: LoginDto,
  ): Promise<IHttpResponse<IUserLoginResponse>> {
    const { openid } = await this.userService.getInfoFromWx(loginDto.js_code);
    let user: UserEntity;
    try {
      user = await this.userService.userFindOneOrFail(openid);
    } catch (e) {
      await this.userService.creatUser(openid);
      user = await this.userService.userFindOneOrFail(openid);
    }
    return successResponse(
      {
        registerStatus: user.mobile
          ? UserRegisterStatus.Register
          : UserRegisterStatus.NeedMobile,
        openid: user.openid,
      },
      '',
    );
  }

  @Post('/register')
  @HttpCode(200)
  async register(
    @Body() registerDto: RegisterDto,
  ): Promise<IHttpResponse<IUserRegisterResponse>> {
    await this.userService.updateUser(registerDto);
    return successResponse({ token: '' }, '注册成功');
  }
}
