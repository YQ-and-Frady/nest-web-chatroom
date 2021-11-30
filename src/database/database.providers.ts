import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from '../constants';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'yaqing',
        password: '123456',
        database: 'web_chatroom',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
