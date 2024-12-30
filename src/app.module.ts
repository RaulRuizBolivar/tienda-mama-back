import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmAsyncOptions } from 'database/typeOrmOptions';
import { AuthModule } from './auth/auth.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { WoodsModule } from 'woods/woods.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(TypeOrmAsyncOptions),
    UsersModule,
    AuthModule,
    ProductsModule,
    CampaignsModule,
    WoodsModule,
  ],
})
export class AppModule {}
