import {
  IsNotEmpty,
  IsNumber,
  IsEnum,
  ValidateIf,
  IsArray,
  IsString,
} from 'class-validator';
import { CreateImageProductDto } from '../../images/dto/imageProduct/create-imageProduct.dto';
import { ProductType } from 'products/enums/productType.enum';
import { amigurumiType } from 'products/enums/amigurumiType.enum';
import { stickType } from 'products/enums/stickType.enum';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  stock: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;

  @IsArray()
  images: CreateImageProductDto[];

  @IsNumber()
  campaign: number;

  @IsEnum(ProductType)
  type: ProductType;

  // Para productos Amigurumi
  @ValidateIf((o) => o.type === ProductType.amigurumi)
  @IsNotEmpty()
  size?: number;

  @ValidateIf((o) => o.type === ProductType.amigurumi)
  @IsNotEmpty()
  babyFriendly?: boolean;

  @ValidateIf((o) => o.type === ProductType.amigurumi)
  @IsNotEmpty()
  amigurumiMaterial?: 'Algodón';

  @ValidateIf((o) => o.type === ProductType.amigurumi)
  @IsNotEmpty()
  stuffed?: 'Hipoalergénico';

  @ValidateIf((o) => o.type === ProductType.amigurumi)
  @IsNotEmpty()
  amigurumiType?: amigurumiType;

  // Para productos Macrame
  @ValidateIf((o) => o.type === ProductType.macrame)
  @IsNotEmpty()
  stick?: stickType;

  @ValidateIf((o) => o.type === ProductType.macrame)
  @IsNotEmpty()
  ropeColor?: string; // TODO Cambiar a Color como entidad propia

  @ValidateIf((o) => o.type === ProductType.macrame)
  @IsNotEmpty()
  macrameMaterial?: 'Algodón';

  @ValidateIf((o) => o.type === ProductType.macrame)
  @IsNotEmpty()
  caliber: 3;

  // Para productos pirograbado
  // @ValidateIf((o) => o.type === ProductType.pirograbado)
  // @IsNotEmpty()
  // wood?: Wood;

  // @ValidateIf((o) => o.type === ProductType.pirograbado)
  // @IsNotEmpty()
  // clientImages?: ClientImage[];
}
