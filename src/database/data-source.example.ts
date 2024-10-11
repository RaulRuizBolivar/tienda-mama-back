import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/*export*/ const dataSourceOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'tienda',
  entities: ['/src/**/*.entity.ts'],
  migrations: ['/src/database/migrations/*.ts'],
};
