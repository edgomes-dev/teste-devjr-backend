import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from 'src/product/product.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryService]), ProductModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
