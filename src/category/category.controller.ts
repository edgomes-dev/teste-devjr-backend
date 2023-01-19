import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';

@Controller('/category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  async Create(@Body() category: CategoryEntity): Promise<CategoryEntity> {
    return await this.categoryService.create(category);
  }

  @Get()
  async GetAll(): Promise<CategoryEntity[]> {
    return await this.categoryService.findAll();
  }
}
