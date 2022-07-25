import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // controller que muetra el texto Hola Mundo
  @Get()
  getHello(): string {
    return 'Hola Mundo';
  }

  // controller que muetra el texto Yo soy nuevo
  @Get('nuevo')
  newEndpoint(){
    return 'Yo soy nuevo!'
  }

  // controller que muetra el texto Con /slash/
  // se refiere a que s epuede llamar /ruta o /ruta/
  @Get('/ruta/')
  nevo() {
    return 'Con /slash/'
  }
}
