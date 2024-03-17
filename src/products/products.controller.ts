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
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { ProductType } from './types/productType.type';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly campaignService: CampaignService,
  ) {}

  @Post()
  @isAdmin()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Post('campaign')
  @isAdmin()
  createCampaign(@Body() createCampaignDto: CreateCampaignDto) {
    return this.campaignService.createOne(createCampaignDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('campaign/:name')
  findCampaignByName(@Param('name') name: string) {
    return this.campaignService.findByName(name);
  }

  @Get(':productType')
  fintByProduct(@Param('productType') productType: ProductType) {
    return this.productsService.findByProductType(productType);
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
