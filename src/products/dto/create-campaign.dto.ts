import { IsDateString, IsString } from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  name: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;
}
