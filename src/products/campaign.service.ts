import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { Campaign } from './entities/campaign.entity';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>,
  ) {}

  async createOne(createCampaignDto: CreateCampaignDto) {
    return await this.campaignRepository.save(createCampaignDto);
  }

  async findById(id: number) {
    return await this.campaignRepository.findOneBy({ id });
  }

  async findByName(name: string) {
    console.log(name); // TODO delete
    return await this.campaignRepository.findOne({ where: { name } });
  }
}
