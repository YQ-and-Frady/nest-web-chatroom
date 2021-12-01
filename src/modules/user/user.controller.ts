import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginDto, RegisterDto } from './user.interface';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';
import { IHttpResponse } from '../../libs/common';
import {
  IUserLoginResponse,
  IUserRegisterResponse,
} from '../../libs/response/user';

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
  login(@Body() form: LoginDto): Promise<IHttpResponse<IUserLoginResponse>> {
    return this.userService.login(form);
  }
}
