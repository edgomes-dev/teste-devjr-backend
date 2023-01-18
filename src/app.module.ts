import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ProductService } from './product/product.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'innovationDB',
      entities: [__dirname + '/*.entity.ts'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
