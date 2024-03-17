import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Campaign } from './entities/campaign.entity';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>,
  ) {}

  async create(createCampaignDto: CreateCampaignDto) {
    const newCampaign = await this.campaignRepository.save(createCampaignDto);
    if (!newCampaign)
      throw new UnprocessableEntityException('Campaign not possible to create');
    return newCampaign;
  }

  async findAll() {
    return await this.campaignRepository.find();
  }

  async findOne(id: number) {
    const campaign = await this.campaignRepository.findOne({
      where: { id },
    });
    if (!campaign) throw new NotFoundException('Campaign not found');
    return campaign;
  }

  async update(name: string, updateCampaignDto: UpdateCampaignDto) {
    const updatedCampaign = await this.campaignRepository.update(
      { name },
      updateCampaignDto,
    );
    if (!updateCampaignDto)
      throw new UnprocessableEntityException(
        'Campaign not possible to updated',
      );
    return updatedCampaign;
  }

  async remove(name: string) {
    const affectedRows = await this.campaignRepository.delete({ name });
    if (affectedRows.affected === 0)
      throw new NotFoundException('Campaign not found');
    return affectedRows;
  }
}
