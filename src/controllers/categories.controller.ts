import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

  // controller para obtener all categories
  @Get()
  getCategories() {
    return {
      message: `All Categories`
    }
  }

  // controller para obtener una order
  @Get(':categorieId')
  getCategorie(@Param('categorieId') categorieId: string) {
      return {
        message: `Brand with id => ${categorieId}`
      }
  }

  // Obtiene los productos de de una categoria especifica
  @Get(':categorieId/products/:productId')
  getCategoriesProducts(@Param('categorieId') categorieId: string, @Param('productId') productId: string) {
    return {
      message: `product ${productId} of categorie ${categorieId}`
    }
  }

  // controller para crear una categorie
  @Post()
  createCategorie(@Body() payload: any){
    return {
      message: 'accion de crear One Categorie',
      payload
    }
  }


  @Put(':categorieId')
  updateCategorie(@Param('categorieId') categorieId:number, @Body() payload: any){
    return {
      categorieId,
      payload,
      message: `Categorie ID:${categorieId} update`
    }
  }

  @Delete(':categorieId')
  deleteCategorie(@Param('categorieId') categorieId:number) {
    return {
      categorieId,
      message: `Categorie ID:${categorieId} deleted`
    }
  }
}
