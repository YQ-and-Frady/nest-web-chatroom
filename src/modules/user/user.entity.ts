import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IRegisterRequest } from './user.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class UserEntity implements IRegisterRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'openid' })
  @Column({
    length: 191,
    unique: true,
    name: 'open_id',
  })
  openid: string;

  @ApiProperty({ description: '手机号' })
  @Column()
  mobile: string;
}
