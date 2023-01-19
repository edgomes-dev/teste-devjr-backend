import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/createProductDto';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

type idType = {
  id: string;
};

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async Create(@Body() produtDto: CreateProductDto): Promise<ProductEntity> {
    return await this.productService.create(produtDto);
  }

  @Get()
  async FindAll(): Promise<ProductEntity[]> {
    return await this.productService.findAll();
  }

  @Get(':id')
  async FindById(@Param() id: idType): Promise<ProductEntity> {
    return await this.productService.findById(parseInt(id.id));
  }

  @Put()
  async Update(@Body() entity: ProductEntity): Promise<void> {
    return await this.productService.update(entity);
  }

  @Delete(':id')
  async Delete(@Param() id: idType): Promise<void> {
    return await this.productService.delete(parseInt(id.id));
  }
}
