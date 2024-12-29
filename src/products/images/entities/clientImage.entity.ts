import { Entity } from 'typeorm';
import { Image } from './image.entity';

@Entity({ name: 'clientImages' })
export class ClientImage extends Image {}
