import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/category/category.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/createProductDto';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(productDto: CreateProductDto): Promise<ProductEntity> {
    const productFound = await this.productRepository.findOne({
      where: {
        name: productDto.name,
      },
    });

    if (productFound) {
      throw new BadRequestException(
        `produto com esse nome ${productDto.name} já cadastrado`,
      );
    }

    const categoryFound: CategoryEntity = await this.categoryRepository.findOne(
      {
        where: {
          id: productDto.category,
        },
      },
    );

    if (!categoryFound) {
      throw new NotFoundException(
        `essa categoria ${productDto.category} não foi encotrada`,
      );
    }

    const productEntity: ProductEntity = new ProductEntity();

    productEntity.name = productDto.name;
    productEntity.quantity = productDto.quantity;
    productEntity.category = categoryFound;

    try {
      return await this.productRepository.save(productEntity);
    } catch (error) {
      throw new ServiceUnavailableException(
        'não possível cadastrar o produto agora, tente novamente mais tarde',
      );
    }
  }

  async findAll(): Promise<ProductEntity[]> {
    return await this.productRepository.find({
      relations: {
        category: true,
      },
    });
  }

  async findById(id: number): Promise<ProductEntity> {
    const productFound = await this.productRepository.findOne({
      where: {
        id,
      },
      relations: {
        category: true,
      },
    });

    if (!productFound) {
      throw new NotFoundException(`jogador com id ${id} não encontrado`);
    }

    return productFound;
  }

  async update(entity: ProductEntity): Promise<void> {
    const productFound = await this.productRepository.findOne({
      where: {
        id: entity.id,
      },
    });

    if (!productFound) {
      throw new NotFoundException(`jogador com id ${entity.id} não encontrado`);
    }

    await this.productRepository.update(entity.id, entity);
  }

  async delete(id: number): Promise<any> {
    const productFound = await this.productRepository.findOne({
      where: {
        id,
      },
    });

    if (!productFound) {
      throw new NotFoundException(`jogador com id ${id} não encontrado`);
    }

    return await this.productRepository.delete(id);
  }
}
