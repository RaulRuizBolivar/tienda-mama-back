import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ImageService } from './image.service';
import { ProductType } from './types/productType.type';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly imageService: ImageService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productRepository.save(createProductDto);

    createProductDto.images.forEach(async (image) => {
      image.product_id = newProduct.id;
      await this.imageService.createOne(image);
    });

    return newProduct;
  }

  findAll() {
    return this.productRepository.find();
  }

  findByProductType(productType: ProductType) {
    return `This action return all products of ${productType}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product ${updateProductDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
