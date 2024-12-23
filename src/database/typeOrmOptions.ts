import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const TypeOrmAsyncOptions: TypeOrmModuleAsyncOptions = {
  useFactory: () => {
    const {
      DATABASE_HOST,
      DATABASE_PORT,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
      DATABASE_DATABASE,
      IsProduction,
    } = process.env;

    if (
      !DATABASE_HOST ||
      !DATABASE_PORT ||
      !DATABASE_USERNAME ||
      !DATABASE_PASSWORD ||
      !DATABASE_DATABASE
    ) {
      throw new Error('Missing necessary database environment variables');
    }

    return {
      type: 'mysql',
      host: DATABASE_HOST,
      port: Number(DATABASE_PORT),
      username: DATABASE_USERNAME,
      password: DATABASE_PASSWORD,
      database: DATABASE_DATABASE,
      autoLoadEntities: true,
      synchronize: IsProduction === 'false',
    };
  },
};
