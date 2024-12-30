import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wood } from './entities/wood.entity';
import { CreateWoodDto } from './dto/create-wood.dto';
import { UpdateWoodDto } from './dto/update-wood.dto';
import { ImageService } from 'images/image.service';

@Injectable()
export class WoodsService {
  constructor(
    @InjectRepository(Wood)
    private readonly woodRepository: Repository<Wood>,
    private readonly imageService: ImageService,
  ) {}

  async createOne(createWoodDto: CreateWoodDto) {
    const newWood = await this.woodRepository.save(createWoodDto);

    if (createWoodDto.images) {
      await Promise.all(
        createWoodDto.images.map(async (image) => {
          image.wood_id = newWood.id;
          await this.imageService.createOneWoodImage(image);
        }),
      );
    }

    return await this.woodRepository.save(createWoodDto);
  }

  async findAll() {
    return await this.woodRepository.find();
  }

  async findOne(id: number) {
    return await this.woodRepository.findOneBy({ id });
  }

  async update(id: number, updateWoodDto: UpdateWoodDto) {
    return await this.woodRepository.update(id, updateWoodDto);
  }

  async remove(id: number) {
    return await this.woodRepository.delete(id);
  }
}
