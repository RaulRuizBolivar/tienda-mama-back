import {
  BeforeInsert,
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'campaigns' })
export class Campaign {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column()
  name: string;

  @Column({ type: 'datetime' })
  startDate: Date;

  @Column({ type: 'datetime' })
  endDate: Date;

  @OneToMany(() => Product, (product) => product.campaign_id)
  products: Product[];

  // Logical remove
  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeInsert()
  beforeInsertActions() {
    this.createdAt = new Date(Date.now());
  }
}
