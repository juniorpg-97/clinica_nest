import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { PacientesService } from '../pacientes/pacientes.service.js';

@Injectable()
export class CitasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pacientesService: PacientesService,
  ) {}

  async create(data: {
    pacienteId: number;
    medicoId: number;
    fecha: Date;
    hora: Date;
  }) {
    const paciente = await this.pacientesService.findOne(data.pacienteId);
    if (!paciente) throw new NotFoundException('El paciente no existe');

    return this.prisma.cita.create({ data });
  }

  findAll() {
    return this.prisma.cita.findMany();
  }
}
