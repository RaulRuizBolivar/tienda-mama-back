import {
  BeforeInsert,
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from 'types/role.type';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: false })
  role: Role;

  // Logical remove
  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeInsert()
  beforeInsertActions() {
    this.createdAt = new Date(Date.now());
  }
}
