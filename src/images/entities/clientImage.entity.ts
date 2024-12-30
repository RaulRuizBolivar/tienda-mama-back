import { Entity } from 'typeorm';
import { Image } from './image.class';

@Entity({ name: 'clientImages' })
export class ClientImage extends Image {}
