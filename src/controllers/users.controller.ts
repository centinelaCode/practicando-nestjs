import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // controller para obtener all users
  @Get()
  getUsers() {
      return {
        message: `All Users`
      }
  }

  // controller para obtener una order
  @Get(':userId')
  getUser(@Param('userId') userId: string) {
      return {
        message: `User with UserId => ${userId}`
      }
  }

  // controller para crear una categorie
  @Post()
  createOrder(@Body() payload: any){
    return {
      message: 'accion de crear One User',
      payload
    }
  }

  @Put(':userId')
  updateUser(@Param('userId') userId:number, @Body() payload: any){
    return {
      userId,
      payload,
      message: `User ID:${userId} update`
    }
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId:number) {
    return {
      userId,
      message: `User ID:${userId} deleted`
    }
  }
}
