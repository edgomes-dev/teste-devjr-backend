import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryService)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(category: CategoryEntity): Promise<CategoryEntity> {
    return await this.categoryRepository.save(category);
  }

  async findAll(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.find();
  }
}
