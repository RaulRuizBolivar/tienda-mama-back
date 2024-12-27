import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wood } from './entities/wood.entity';
import { CreateWoodDto } from './dto/create-wood.dto';

@Injectable()
export class WoodService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Wood>,
  ) {}

  async createOne(createWoodDto: CreateWoodDto) {
    return await this.imageRepository.save(createWoodDto);
  }
}
