import { IsNumber, IsString } from 'class-validator';

export class CreateImageProductDto {
  @IsString()
  url: string;

  @IsNumber()
  product_id: number;
}
