import { Controller, Post, Get, Body } from '@nestjs/common';
import { CitasService } from './citas.service.js';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';

import { CreateCitaDto } from './dto/create-cita.dto.js';

@ApiTags('Citas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @Post()
  @ApiOperation({
    summary: 'Crear una cita',
  })
  create(@Body() body: CreateCitaDto) {
    return this.citasService.create(body);
  }

  @Get()
  @ApiOperation({
    summary: 'Ver todas las citas',
  })
  findAll() {
    return this.citasService.findAll();
  }
}
