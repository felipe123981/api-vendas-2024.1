import { ProductModel } from "@/products/domain/models/products.model";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product implements ProductModel {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @Column({ nullable: true })
  size?: string;

  @Column({ type: 'int', nullable: true })
  number?: number;

  @Column('int')
  width: number;

  @Column('int')
  height: number;

  @Column('int')
  length: number;

  @Column('int')
  weight: number;

  @Column({ nullable: true })
  brand?: string;

  @Column({ nullable: true })
  model?: string;

  @Column({ nullable: true })
  color?: string;

  @Column('varchar')
  categorie: string;

  @Column('varchar', { array: true, nullable: true })
  photos: string[];

  @Column({ nullable: true })
  publisher?: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at?: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updated_at?: Date;
}
