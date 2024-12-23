// import { Campaign } from 'campaigns/entities/campaign.entity';
// import {
//   BeforeInsert,
//   Column,
//   DeleteDateColumn,
//   Entity,
//   JoinColumn,
//   ManyToOne,
//   OneToMany,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// import { Image } from './image.entity';

// @Entity({ name: 'products' })
// export class Product {
//   @PrimaryGeneratedColumn({})
//   id: number;

//   @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
//   createdAt: Date;

//   @Column({ nullable: false })
//   name: string;

//   @Column({ type: 'int', nullable: false })
//   stock: number;

//   @Column({ default: '' })
//   description: string;

//   @Column({ type: 'float', nullable: false })
//   price: number;

//   @OneToMany(() => Image, (image) => image.product_id, { eager: true })
//   images: Image[];

//   @ManyToOne(() => Campaign, (campaign) => campaign.id, {
//     eager: true,
//     onDelete: 'SET NULL',
//   })
//   @JoinColumn({ name: 'campaign_id', referencedColumnName: 'id' })
//   campaign: number; // Must be number, its a forain key

//   // Logical remove
//   @DeleteDateColumn({ select: false })
//   deletedAt: Date;

//   @BeforeInsert()
//   beforeInsertActions() {
//     this.createdAt = new Date(Date.now());
//   }
// }
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
import { Image } from './image.entity';

// Definimos el enum para los tipos de producto
export enum ProductType {
  Electronics = 'electronics',
  Clothing = 'clothing',
  Furniture = 'furniture',
}

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

  @Column({
    type: 'enum',
    enum: ProductType,
    nullable: false,
  })
  type: ProductType;

  // Campos específicos para Electronics
  @Column({ nullable: true })
  warrantyPeriod: string;

  @Column({ nullable: true })
  brand: string;

  // Campos específicos para Clothing
  @Column({ nullable: true })
  size: string;

  @Column({ nullable: true })
  material: string;

  // Campos específicos para Furniture
  @Column({ nullable: true })
  dimensions: string;

  @Column({ nullable: true, name: 'furniture_material' })
  furnitureMaterial: string;

  @OneToMany(() => Image, (image) => image.product_id, { eager: true })
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
}
