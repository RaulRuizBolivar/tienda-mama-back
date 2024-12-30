import { WoodImage } from 'images/entities/woodImage.entity';
import {
  BeforeInsert,
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
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

  @OneToMany(() => WoodImage, (image) => image.wood_id, {
    eager: true,
    nullable: true,
  })
  images: WoodImage[];

  @Column({ type: 'int' })
  height: number;

  @Column({ type: 'int' })
  width: number;

  @Column({ type: 'int' })
  depth: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  name: string;

  @BeforeInsert()
  beforeInsertActions() {
    this.createdAt = new Date(Date.now());
  }
}
