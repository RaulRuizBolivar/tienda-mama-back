import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CampaignService } from './campaign.service';
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
    private readonly campaignService: CampaignService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productRepository.save(createProductDto);

    createProductDto.images.forEach(async (image) => {
      image.product_id = newProduct.id;
      await this.imageService.createOne(image);
    });

    const campaign = await this.campaignService.findById(
      newProduct.campaign_id,
    );

    newProduct.campaign = campaign;
    delete newProduct.campaign_id;

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
