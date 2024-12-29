import { Product } from 'products/entities/product.entity';
import { ManyToOne, JoinColumn, Entity } from 'typeorm';
import { Image } from './image.entity';

@Entity({ name: 'productImages' })
export class ProductImage extends Image {
  @ManyToOne(() => Product, (product) => product.images, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'product_id' })
  product_id: number;
}
