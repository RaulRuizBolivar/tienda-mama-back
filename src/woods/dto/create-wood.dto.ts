import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { WoodImage } from 'images/entities/woodImage.entity';

export class CreateWoodDto {
  @IsNumber()
  height: number;

  @IsNumber()
  width: number;

  @IsNumber()
  depth: number;

  @IsNumber()
  stock: number;

  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsArray()
  images: WoodImage[];
}
