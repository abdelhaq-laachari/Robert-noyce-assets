import { Controller, Get , Post, Put , Delete , Body , Param } from '@nestjs/common';
import { CreateProductDto } from './dto/creat-product.dto';
import { ProductService } from './product.service';
import { Product } from './interfaces/product.interface';
 

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {}

    @Get( )
    findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Product> {
       return this.productService.findOne(id);
    }

    @Post (  )
     AddProduct(@Body() createProductDto : CreateProductDto  ): Promise<Product> {
        return this.productService.create(createProductDto); 
    }
    @Delete(':id')
    deleteProduct(@Param('id') id): Promise<Product> {
        return this.productService.delete(id);
    }

    @Put(':id')
    updateProduct(@Body() createProductDto: CreateProductDto, @Param('id') id): Promise<Product> {
        return this.productService.update(id, createProductDto);
        
    }


}
