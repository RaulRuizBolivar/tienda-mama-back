import {
  BeforeInsert,
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'woods' })
export class Wood {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  // Logical remove
  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @BeforeInsert()
  beforeInsertActions() {
    this.createdAt = new Date(Date.now());
  }
}
