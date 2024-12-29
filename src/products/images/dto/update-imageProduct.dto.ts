import { PartialType } from '@nestjs/mapped-types';
import { CreateImageProductDto } from './create-imageProduct.dto';

export class UpdateImageDto extends PartialType(CreateImageProductDto) {}
