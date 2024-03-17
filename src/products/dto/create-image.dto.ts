import { IsNumber, IsString } from 'class-validator';

export class CreateImageDto {
  @IsString()
  url: string;

  @IsNumber()
  product_id: number;
}
