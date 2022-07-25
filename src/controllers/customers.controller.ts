import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  // controller para obtener all users
  @Get()
  getCustomers() {
      return {
        message: `All Customers`
      }
  }

  // controller para obtener una order
  @Get(':customerId')
  getCustomer(@Param('customerId') customerId: string) {
      return {
        message: `Customer with customerId => ${customerId}`
      }
  }

  // controller para crear una categorie
  @Post()
  createCustomer(@Body() payload: any){
    return {
      message: 'accion de crear One Customer',
      payload
    }
  }

  @Put(':customerId')
  updateCustomer(@Param('customerId') customerId:number, @Body() payload: any){
    return {
      customerId,
      payload,
      message: `Order ID:${customerId} update`
    }
  }

  @Delete(':customerId')
  deleteCustomer(@Param('customerId') customerId:number) {
    return {
      customerId,
      message: `Order ID:${customerId} deleted`
    }
  }
}
