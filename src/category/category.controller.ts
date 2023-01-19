import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/createCategoryDto';

@Controller('/category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  async Create(
    @Body() categoryDto: CreateCategoryDto,
  ): Promise<CategoryEntity> {
    return await this.categoryService.create(categoryDto);
  }

  @Get()
  async GetAll(): Promise<CategoryEntity[]> {
    return await this.categoryService.findAll();
  }
}
