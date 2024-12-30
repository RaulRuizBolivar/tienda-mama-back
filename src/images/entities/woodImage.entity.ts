import { ManyToOne, JoinColumn, Entity } from 'typeorm';
import { Image } from './image.class';
import { Wood } from 'woods/entities/wood.entity';

@Entity({ name: 'woodImages' })
export class WoodImage extends Image {
  @ManyToOne(() => Wood, (wood) => wood.images, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'wood_id' })
  wood_id: number;
}
