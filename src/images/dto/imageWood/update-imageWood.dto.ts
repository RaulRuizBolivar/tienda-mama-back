import { PartialType } from '@nestjs/mapped-types';
import { CreateImageWoodDto } from './create-imageWood.dto';

export class UpdateImageWoodDto extends PartialType(CreateImageWoodDto) {}
