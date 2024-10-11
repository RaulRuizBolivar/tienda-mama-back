import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.getOrThrow('DATABASE_HOST'),
  port: Number(configService.getOrThrow('DATABASE_PORT')),
  username: configService.getOrThrow('DATABASE_USERNAME'),
  password: configService.getOrThrow('DATABASE_PASSWORD'),
  database: configService.getOrThrow('DATABASE_DATABASE'),
  entities: ['/src/**/*.entity.ts'],
  migrations: ['/src/database/migrations/*.ts'],
});
