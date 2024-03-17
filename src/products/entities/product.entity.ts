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
import { Campaign } from './campaign.entity';
import { Image } from './image.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'int', nullable: false })
  stock: number;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @OneToMany(() => Image, (image) => image.product_id, { eager: true })
  images: Image[];

  @ManyToOne(() => Campaign, (campaign) => campaign.products)
  @JoinColumn({ name: 'campaign_name', referencedColumnName: 'name' })
  campaign_name: string;

  // Logical remove
  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeInsert()
  beforeInsertActions() {
    this.createdAt = new Date(Date.now());
  }
}
