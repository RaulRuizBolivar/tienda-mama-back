import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { Campaign } from 'products/entities/campaign.entity';
import { CreateImageDto } from './create-image.dto';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  stock: number;

  @IsArray()
  images: CreateImageDto[];

  @IsString()
  campaign_name: string;

  @IsOptional()
  campaign: Campaign;
}
