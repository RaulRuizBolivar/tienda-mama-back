import { PartialType } from '@nestjs/mapped-types';
import { CreateWoodDto } from './create-wood.dto';

export class UpdateImageDto extends PartialType(CreateWoodDto) {}
