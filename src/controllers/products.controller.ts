import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
  // Res
} from '@nestjs/common';
// import { Response } from 'express';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../common/parse-int.pipe';

@Controller('products')
export class ProductsController {
  constructor(private productsService:ProductsService){}

  // controller con varios parametros Query
  @Get()
  getProducts(
      @Query('limit') limit = 101,
      @Query('offset') offset = 0,
      @Query('brand') brand: string,
  ) {
      console.log(limit)
      console.log(offset)
      console.log(brand)
      // return {
      //   message: `products parmas query: Limit=> ${limit} | offset=> ${offset} | brend: => ${brand}`
      // }

      return this.productsService.findAll();
  }



  // controller con parametros
  @Get('filter')
  getProductFilter() {
    return {
      message: `Yo soy un filto`
    }
  }




  // controller con parametros  EJEMPLO USANSO EL RES DE EXPRESS
  // @Get(':productId')
  // @HttpCode(HttpStatus.ACCEPTED)
  // getProduct(@Res() response: Response, @Param('productId') productId: string) {
  //   response.status(200).send({
  //     message: `product ${productId} (with express)`,
  //   });
    // return {
    //   message: `product ${productId}`,
    // }
  // }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    // return {
    //   message: `product ${productId}`,
    // }
    return this.productsService.findOne(productId);
  }



  // controller para crear un product
  @Post()
  createProduct(@Body() payload: CreateProductDto){
    // return {
    //   message: 'accion de crear One Product',
    //   payload
    // }
    return this.productsService.create(payload);
  }

  @Put(':productId')
  updateProduct(@Param('productId') productId:string, @Body() payload: UpdateProductDto){
    // return {
    //   productId,
    //   payload,
    //   message: `Product ID:${productId} update`
    // }
    return this.productsService.update(+productId, payload);
  }

  @Delete(':productId')
  deleteProduct(@Param('productId') productId:string) {
    // return {
    //   productId,
    //   message: `Product ID:${productId} deleted`
    // }

    return this.productsService.delete(+productId)
  }
}
