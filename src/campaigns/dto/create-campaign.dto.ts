import { Transform } from 'class-transformer';
import { IsDateString, IsString, MinLength } from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  @MinLength(3)
  @Transform((param) => param.value.toLowerCase().trim())
  name: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;
}
