import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { returnJson } from './returnJson.interface';

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
}
