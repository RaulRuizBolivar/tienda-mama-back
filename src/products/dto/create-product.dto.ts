import { Transform } from 'class-transformer';
import { IsArray, IsNumber, IsString } from 'class-validator';
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
  @Transform((param) => param.value.toLowerCase())
  campaign_name: string;
}
