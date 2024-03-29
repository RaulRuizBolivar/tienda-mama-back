import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { isAdmin } from 'common/decorators/isAdmin.decorator';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductType } from './enums/productType.enum';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @isAdmin()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('type/:productType')
  findByProduct(@Param('productType') productType: ProductType) {
    return this.productsService.findByProductType(productType);
  }

  @Get('campaign/:id')
  findByCampaign(@Param('id') campaign_id: string) {
    return this.productsService.findByProductCampaignId(parseInt(campaign_id));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @isAdmin()
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @isAdmin()
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
