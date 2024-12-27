import { Campaign } from 'campaigns/entities/campaign.entity';
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
import { Image } from '../images/entities/image.entity';
import { stickType } from '../enums/stickType.enum';
import { amigurumiType } from '../enums/amigurumiType.enum';
import { ProductType } from '../enums/productType.enum';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
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

  @Column({ default: '' })
  label: string;

  @Column({
    type: 'enum',
    enum: ProductType,
    nullable: false,
  })
  type: ProductType;

  @OneToMany(() => Image, (image) => image.product_id, {
    eager: true,
    nullable: true,
  })
  images: Image[];

  @ManyToOne(() => Campaign, (campaign) => campaign.id, {
    eager: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'campaign_id', referencedColumnName: 'id' })
  campaign: number;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @BeforeInsert()
  beforeInsertActions() {
    this.createdAt = new Date(Date.now());
  }

  // Campos específicos para Amigurumi
  @Column({ nullable: true })
  size: number;

  @Column({ nullable: true })
  babyFriendlg: boolean;

  @Column({ nullable: true })
  amigurumiMaterial: 'Algodón';

  @Column({ nullable: true })
  stuffed: 'Hipoalergénico';

  @Column({ nullable: true })
  amigurumiType: amigurumiType;

  // Campos específicos para Macrame
  @Column({ nullable: true })
  stick: stickType;

  @Column({ nullable: true })
  ropeColor: string; // TODO Cambiar a Color como entidad propia

  @Column({ nullable: true })
  macrameMaterial: 'Algodón';

  @Column({ nullable: true })
  caliber: 3;

  // Campos específicos para Pirograbado
  // @ManyToMany(() => Wood, (wood) => wood.product_id, {
  //   eager: true,
  //   nullable: true,
  // })
  // wood: Wood;
  // FIXME - Añadir relación con la tabla de madera

  // @OneToMany(() => ClientImage, (clientImage) => clientImage.product_id, {
  //   eager: true,
  //   nullable: true,
  // })
  // clientImages: Image[];
  // FIXME - Añadir relación con la tabla de imágenes de clientes
}
