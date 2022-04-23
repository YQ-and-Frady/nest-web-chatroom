import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';

export interface IRegisterRequest {
  openid: string;
  mobile: string;
}

export class RegisterDto implements IRegisterRequest {
  @ApiProperty({ description: 'openId' })
  openid: string;

  @ApiProperty({ description: '手机号' })
  mobile: string;
}

export interface ILoginRequest {
  js_code: string;
}

export class LoginDto implements ILoginRequest {
  @ApiProperty({ description: 'js_code' })
  @IsNotEmpty()
  readonly js_code: string;
}
