import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConfig } from 'auth/config/jwt.config';
import { CampaignsModule } from 'campaigns/campaigns.module';
import { Image } from './entities/image.entity';
import { Product } from './entities/product.entity';
import { ImageService } from './image.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [
    JwtModule.registerAsync(jwtConfig),
    TypeOrmModule.forFeature([Product, Image]),
    CampaignsModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ImageService],
})
export class ProductsModule {}
