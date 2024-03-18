import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOperator, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductType } from './enums/productType.enum';
import { ImageService } from './image.service';

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

    console.log(newProduct); // TODO delete

    return await this.findOne(newProduct.id);
  }

  findAll() {
    return this.productRepository.find();
  }

  findByProductType(productType: ProductType) {
    return `This action return all products of ${productType}`;
  }

  async findByProductCampaignId(campaign_id: number) {
    // FindOperator was imprescindible to find well this endpoint
    return await this.productRepository.find({
      relations: ['campaign'],
      where: { campaign: new FindOperator('equal', campaign_id) },
    });
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product ${updateProductDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
