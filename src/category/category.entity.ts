import { ProductEntity } from 'src/product/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => ProductEntity, (product) => product.id)
  products: ProductEntity[];
}
