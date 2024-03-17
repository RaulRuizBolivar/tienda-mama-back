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

  @Column({ unique: true })
  name: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  startDate: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  endDate: Date;

  @OneToMany(() => Product, (product) => product.campaign_name, { eager: true })
  products: Product[];

  // Logical remove
  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeInsert()
  beforeInsertActions() {
    this.createdAt = new Date(Date.now());
  }
}
