import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IRegisterRequest } from './user.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class UserEntity implements IRegisterRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'openid' })
  @Column()
  openid: string;

  @ApiProperty({ description: '手机号1' })
  @Column()
  mobile: string;
}
