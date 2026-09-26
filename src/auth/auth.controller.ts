import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { Role } from '../generated/prisma/enums.js';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Registrar un usuario' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'hector.prueba@gmail.com',
        },
        password: {
          type: 'string',
          example: 'Hector123456',
        },
        role: {
          type: 'string',
          enum: ['RECEPCIONISTA', 'MEDICO', 'GERENCIA'],
          example: 'RECEPCIONISTA',
        },
      },
      required: ['email', 'password', 'role'],
    },
  })
  async register(
    @Body()
    body: {
      email: string;
      password: string;
      role: Role;
    },
  ) {
    return this.authService.register(body.email, body.password, body.role);
  }

  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'hector.prueba@gmail.com',
        },
        password: {
          type: 'string',
          example: 'Hector123456',
        },
      },
      required: ['email', 'password'],
    },
  })
  async login(
    @Body()
    body: {
      email: string;
      password: string;
    },
  ) {
    return this.authService.login(body.email, body.password);
  }
}
