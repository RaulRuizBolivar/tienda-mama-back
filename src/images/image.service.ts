import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageProductDto } from './dto/imageProduct/create-imageProduct.dto';
import { ProductImage } from './entities/productImage.entity';
import { isAdmin } from 'common/decorators/isAdmin.decorator';
import { CreateImageWoodDto } from './dto/imageWood/create-imageWood.dto';
import { WoodImage } from './entities/woodImage.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(ProductImage)
    private readonly ProductImageRepository: Repository<ProductImage>,
    @InjectRepository(WoodImage)
    private readonly WoodImageRepository: Repository<WoodImage>,
  ) {}

  @isAdmin()
  async createOneProductImage(createImageProductDto: CreateImageProductDto) {
    return await this.ProductImageRepository.save(createImageProductDto);
  }

  @isAdmin()
  async createOneWoodImage(createImageWoodDto: CreateImageWoodDto) {
    return await this.WoodImageRepository.save(createImageWoodDto);
  }
}
