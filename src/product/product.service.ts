import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async create(product: ProductEntity): Promise<ProductEntity> {
    return await this.productRepository.save(product);
  }

  async findAll(): Promise<ProductEntity[]> {
    return await this.productRepository.find();
  }

  async findById(id: number): Promise<ProductEntity> {
    const data = await this.productRepository.findOne({
      where: {
        id,
      },
    });

    return data;
  }

  async update(entity: ProductEntity): Promise<void> {
    await this.productRepository.update(entity.id, entity);
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
