import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IRegisterRequest } from './user.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class UserEntity implements IRegisterRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '用户名' })
  @Column()
  username: string;

  @ApiProperty({ description: '性别' })
  @Column()
  gender: string;

  @ApiProperty({ description: '手机号' })
  @Column()
  mobile: string;

  @ApiProperty({ description: '密码' })
  @Column()
  password: string;
}
