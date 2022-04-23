import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from '../constants';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: '101.33.209.79',
        port: 3306,
        username: 'yaqing',
        password: 'kActGN7WnziwhrLN',
        database: 'webchatroom',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
