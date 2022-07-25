import { Controller, Get, Query, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  // controller para obtener all orders o con parametros Query dateOrder
  @Get()
  getOrdersDate(
      @Query('dateorder') dateOrder = '01/01/2001',
  ) {
      return {
        message: `products with date: dateorder=> ${dateOrder}`
      };
  }

  // controller para obtener una order
  @Get(':orderId')
  getOrder(@Param('orderId') orderId: string) {
      return {
        message: `Order with OrderId => ${orderId}`
      }
  }

  // controller para crear una categorie
  @Post()
  createOrder(@Body() payload: any){
    return {
      message: 'accion de crear One Order',
      payload
    }
  }

  @Put(':orderId')
  updateOrder(@Param('orderId') orderId:number, @Body() payload: any){
    return {
      orderId,
      payload,
      message: `Order ID:${orderId} update`
    }
  }

  @Delete(':orderId')
  deleteOrder(@Param('orderId') orderId:number) {
    return {
      orderId,
      message: `Order ID:${orderId} deleted`
    }
  }
}
