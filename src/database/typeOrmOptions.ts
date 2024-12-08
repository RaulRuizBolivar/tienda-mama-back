import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const TypeOrmAsyncOptions: TypeOrmModuleAsyncOptions = {
  useFactory: () => ({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    autoLoadEntities: true,
    // migrations: ['/src/database/migrations/*.ts'],
    synchronize: Boolean(process.env.IsProduction === 'true'),
  }),
};
