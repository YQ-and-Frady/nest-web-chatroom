import { Injectable } from '@nestjs/common';
import { Register, Login, returnJson } from './returnJson.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getJson(): returnJson {
    return {
      name: '小黄',
      mobile: 4542464415,
    };
  }
  register(params): Register {
    return {
      name: params.name,
      gender: params.gender,
      mobile: params.mobile,
      password: params.password,
    };
  }
  login(params): Login {
    return {
      mobile: params.mobile,
      password: params.password,
    };
  }
}
