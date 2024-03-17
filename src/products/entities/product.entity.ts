import { Campaign } from 'campaigns/entities/campaign.entity';
import { ProductType } from 'products/enums/productType.enum';
import {
  BeforeInsert,
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from './image.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'int', nullable: false })
  stock: number;

  @Column({ default: '' })
  description: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @OneToMany(() => Image, (image) => image.product_id, { eager: true })
  images: Image[];

  @ManyToOne(() => Campaign, (campaign) => campaign.id, { eager: true })
  @JoinColumn({ name: 'campaign_id', referencedColumnName: 'id' })
  campaign: number; // Must be number, its a forain key

  @Column()
  type: ProductType;

  // Logical remove
  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @BeforeInsert()
  beforeInsertActions() {
    this.createdAt = new Date(Date.now());
  }
}
