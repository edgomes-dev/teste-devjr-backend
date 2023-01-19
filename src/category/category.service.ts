import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CreateCategoryDto } from './dto/createCategoryDto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(categoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    const categoryEntity: CategoryEntity = new CategoryEntity();

    categoryEntity.name = categoryDto.name;

    return await this.categoryRepository.save(categoryEntity);
  }

  async findAll(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.find({
      relations: {
        products: true,
      },
    });
  }
}
