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
import { WoodsService } from './woods.service';
import { CreateWoodDto } from './dto/create-wood.dto';
import { UpdateWoodDto } from './dto/update-wood.dto';

@Controller('woods')
export class WoodsController {
  constructor(private readonly woodsService: WoodsService) {}

  @Post()
  @isAdmin()
  create(@Body() createWoodDto: CreateWoodDto) {
    return this.woodsService.createOne(createWoodDto);
  }

  @Get()
  findAll() {
    return this.woodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.woodsService.findOne(+id);
  }

  @Patch(':id')
  @isAdmin()
  update(@Param('id') id: string, @Body() updateWoodDto: UpdateWoodDto) {
    return this.woodsService.update(+id, updateWoodDto);
  }

  @Delete(':id')
  @isAdmin()
  remove(@Param('id') id: string) {
    return this.woodsService.remove(+id);
  }
}
