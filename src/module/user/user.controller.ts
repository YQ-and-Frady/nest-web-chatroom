import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
} from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/register')
  @HttpCode(200)
  async register(@Body() params: IRegisterRequest): Promise<any> {
    return await this.userService.register(params);
  }

  @Post('/login')
  @HttpCode(200)
  login(@Body() params: ILoginRequest): ILoginResponse {
    return this.userService.login(params);
  }
}
