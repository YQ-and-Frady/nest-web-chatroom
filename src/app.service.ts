import { Injectable } from '@nestjs/common';
import { returnJson } from './returnJson.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getJson(): returnJson {
    return {
      name: '小黄',
      mobile: 4542465,
    };
  }
}
