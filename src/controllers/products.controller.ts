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
  Res
} from '@nestjs/common';
import {Response} from 'express'

@Controller('products')
export class ProductsController {
  // controller con varios parametros Query
  @Get()
  getProducts(
      @Query('limit') limit = 101,
      @Query('offset') offset = 0,
      @Query('brand') brand: string,
  ) {
      return {
        message: `products parmas query: Limit=> ${limit} | offset=> ${offset} | brend: => ${brand}`
      }
  }

  // controller con parametros
  @Get('filter')
  getProductFilter() {
    return {
      message: `Yo soy un filto`
    }
  }

  // controller con parametros  EJEMPLO USANSO EL RES DE EXPRESS
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Res() response: Response, @Param('productId') productId: string) {
    response.status(200).send({
      message: `product ${productId} (with express)`,
    });
    // return {
    //   message: `product ${productId}`,
    // }
  }

  // controller para crear un product
  @Post()
  createProduct(@Body() payload: any){
    return {
      message: 'accion de crear One Product',
      payload
    }
  }

  @Put(':productId')
  updateProduct(@Param('productId') productId:number, @Body() payload: any){
    return {
      productId,
      payload,
      message: `Product ID:${productId} update`
    }
  }

  @Delete(':productId')
  deleteProduct(@Param('productId') productId:number) {
    return {
      productId,
      message: `Product ID:${productId} deleted`
    }
  }
}
