import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConfig } from 'auth/config/jwt.config';
import { CampaignService } from './campaign.service';
import { Campaign } from './entities/campaign.entity';
import { Image } from './entities/image.entity';
import { Product } from './entities/product.entity';
import { ImageService } from './image.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [
    JwtModule.registerAsync(jwtConfig),
    TypeOrmModule.forFeature([Product, Image, Campaign]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ImageService, CampaignService],
})
export class ProductsModule {}
