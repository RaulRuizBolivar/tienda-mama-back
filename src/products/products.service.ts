import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOperator } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductType } from './enums/productType.enum';
import { ImageService } from '../images/image.service';
import { removeNullFields } from 'common/utils/removeNullFields.util';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly imageService: ImageService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productRepository.save(createProductDto);

    await Promise.all(
      createProductDto.images.map(async (image) => {
        image.product_id = newProduct.id;
        await this.imageService.createOneProductImage(image);
      }),
    );

    return this.findOne(newProduct.id);
  }

  async findAll() {
    const products = await this.productRepository.find();
    return products.map((product) => removeNullFields(product));
  }

  findByProductType(productType: ProductType) {
    // TODO - Implement this method
    return `This action return all products of ${productType}`;
  }

  async findByProductCampaignId(campaign_id: number) {
    // FindOperator was imprescindible to find well this endpoint
    return await this.productRepository.find({
      relations: ['campaign'],
      where: { campaign: new FindOperator('equal', campaign_id) },
    });
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    return removeNullFields(product);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product ${updateProductDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
