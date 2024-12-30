import { IsNumber, IsString } from 'class-validator';

export class CreateImageWoodDto {
  @IsString()
  url: string;

  @IsNumber()
  wood_id: number;
}
