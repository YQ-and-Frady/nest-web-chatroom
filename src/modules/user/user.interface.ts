import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';

export interface IRegisterRequest {
  username: string;
  gender: string;
  mobile: string;
  password: string;
}

export class RegisterDto implements IRegisterRequest {
  @ApiProperty({ description: '性别' })
  @IsString()
  gender: string;

  @ApiProperty({ description: '手机号' })
  mobile: string;

  @ApiProperty({ description: '密码' })
  password: string;

  @ApiProperty({ description: '用户名' })
  username: string;
}

export interface ILoginRequest {
  mobile: number;
  password: string;
}

export class LoginDto implements ILoginRequest {
  @ApiProperty({ description: '手机号' })
  @IsNotEmpty()
  readonly mobile: number;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty()
  readonly password: string;
}
