import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  // controller para obtener all users
  @Get()
  getBrands() {
      return {
        message: `All Brands`
      }
  }

  // controller para obtener una order
  @Get(':brandId')
  getBrand(@Param('brandId') brandId: string) {
      return {
        message: `Brand with BrandsId => ${brandId}`
      }
  }

  // controller para crear un product
  @Post()
  createBrand(@Body() payload: any){
    return {
      message: 'accion de crear One Brand',
      payload
    }
  }

  @Put(':brandId')
  updateBrand(@Param('brandId') brandId:number, @Body() payload: any){
    return {
      brandId,
      payload,
      message: `Brand ID:${brandId} update`
    }
  }

  @Delete(':brandId')
  deleteBrand(@Param('brandId') brandId:number) {
    return {
      brandId,
      message: `Brand ID:${brandId} deleted`
    }
  }
}
