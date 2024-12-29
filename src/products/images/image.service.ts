import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageProductDto } from './dto/create-imageProduct.dto';
import { ProductImage } from './entities/productImage.entity';
import { isAdmin } from 'common/decorators/isAdmin.decorator';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(ProductImage)
    private readonly imageRepository: Repository<ProductImage>,
  ) {}

  @isAdmin()
  async createOne(createImageProductDto: CreateImageProductDto) {
    return await this.imageRepository.save(createImageProductDto);
  }
}
