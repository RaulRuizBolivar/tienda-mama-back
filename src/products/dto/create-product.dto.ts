// import {
//   IsArray,
//   IsNumber,
//   IsOptional,
//   IsString,
//   MinLength,
// } from 'class-validator';
// import { CreateImageDto } from './create-image.dto';

// export class CreateProductDto {
//   @IsString()
//   @MinLength(3)
//   name: string;

//   @IsString()
//   @IsOptional()
//   description: string;

//   @IsNumber()
//   price: number;

//   @IsNumber()
//   stock: number;

//   @IsArray()
//   images: CreateImageDto[];

//   @IsNumber()
//   campaign: number;
// }

import {
  IsNotEmpty,
  IsNumber,
  IsEnum,
  ValidateIf,
  IsArray,
} from 'class-validator';
import { ProductType } from '../entities/product.entity';
import { CreateImageDto } from './create-image.dto';
export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  stock: number;

  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;

  @IsArray()
  images: CreateImageDto[];

  @IsNumber()
  campaign: number;

  @IsEnum(ProductType)
  type: ProductType;

  // Para productos Electronics
  @ValidateIf((o) => o.type === ProductType.Electronics)
  @IsNotEmpty()
  warrantyPeriod?: string;

  @ValidateIf((o) => o.type === ProductType.Electronics)
  @IsNotEmpty()
  brand?: string;

  // Para productos Clothing
  @ValidateIf((o) => o.type === ProductType.Clothing)
  @IsNotEmpty()
  size?: string;

  @ValidateIf((o) => o.type === ProductType.Clothing)
  @IsNotEmpty()
  material?: string;

  // Para productos Furniture
  @ValidateIf((o) => o.type === ProductType.Furniture)
  @IsNotEmpty()
  dimensions?: string;

  @ValidateIf((o) => o.type === ProductType.Furniture)
  @IsNotEmpty()
  furnitureMaterial?: string;
}
