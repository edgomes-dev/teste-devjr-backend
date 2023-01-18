import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

type idType = {
  id: string;
};

@Controller('api/v1/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async Create(@Body() produt: ProductEntity): Promise<ProductEntity> {
    return await this.productService.create(produt);
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
