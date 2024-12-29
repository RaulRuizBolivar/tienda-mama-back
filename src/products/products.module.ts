import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConfig } from 'auth/config/jwt.config';
import { CampaignsModule } from 'campaigns/campaigns.module';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ImageService } from './images/image.service';
import { ProductImage } from './images/entities/productImage.entity';
import { ProductsService } from './products.service';

@Module({
  imports: [
    JwtModule.registerAsync(jwtConfig),
    TypeOrmModule.forFeature([Product, ProductImage]),
    CampaignsModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ImageService],
})
export class ProductsModule {}
