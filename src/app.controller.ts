import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Register, Login, returnJson } from './returnJson.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello-world')
  getHello(): string {
    return this.appService.getHello();
  }
  // 返回一个json对象
  @Get('/get-json')
  getJoin(): returnJson {
    return this.appService.getJson();
  }

  @Post('/register')
  @HttpCode(200)
  register(@Body() params: Register): Register {
    return this.appService.register(params);
  }

  @Post('/login')
  @HttpCode(200)
  login(@Body() params: Login): Login {
    return this.appService.login(params);
  }
}
