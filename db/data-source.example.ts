import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Campaign } from 'campaigns/entities/campaign.entity';
import { Image } from 'products/entities/image.entity';
import { Product } from 'products/entities/product.entity';
import { User } from 'users/entities/user.entity';

/*export*/ const dataSourceOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'tienda',
  entities: [Image, Campaign, Product, User],
  synchronize: true,
};
