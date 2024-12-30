import { PartialType } from '@nestjs/mapped-types';
import { CreateImageProductDto } from './create-imageProduct.dto';

export class UpdateImageProductDto extends PartialType(CreateImageProductDto) {}
