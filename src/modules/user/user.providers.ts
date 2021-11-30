import { Connection, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { DATABASE_CONNECTION, USER_REPOSITORY } from '../../constants';

export const UserProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getRepository(UserEntity),
    inject: [DATABASE_CONNECTION],
  },
];
