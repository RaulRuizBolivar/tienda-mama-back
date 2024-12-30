import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConfig } from 'auth/config/jwt.config';
import { JwtModule } from '@nestjs/jwt';
import { Wood } from './entities/wood.entity';
import { WoodsService } from './woods.service';
import { WoodsController } from './woods.controller';
import { ImagesModule } from 'images/images.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Wood]),
    JwtModule.registerAsync(jwtConfig),
    ImagesModule,
  ],
  providers: [WoodsService],
  controllers: [WoodsController],
  exports: [WoodsService],
})
export class WoodsModule {}
