import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImage } from './entities/productImage.entity';
import { ImageService } from './image.service';
import { jwtConfig } from 'auth/config/jwt.config';
import { JwtModule } from '@nestjs/jwt';
import { WoodImage } from './entities/woodImage.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductImage, WoodImage]),
    JwtModule.registerAsync(jwtConfig),
  ],
  providers: [ImageService],
  exports: [ImageService],
})
export class ImagesModule {}
