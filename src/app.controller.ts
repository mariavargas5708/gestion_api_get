import { Controller, Get } from '@nestjs/common';

@Controller('inicio')
export class AppController {

  @Get('bienvenida')
  obtenerBienvenida() {
    return {
      mensaje: 'Bienvenido al sistema de gestión',
      sistema: 'Gestion API',
      version: '1.0.0'
    };
  }

}