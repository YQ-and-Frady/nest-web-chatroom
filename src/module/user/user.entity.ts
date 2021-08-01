import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IRegisterRequest } from './user.interface';

@Entity()
export class UserEntity implements IRegisterRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  gender: string;

  @Column()
  mobile: string;

  @Column()
  password: string;
}
