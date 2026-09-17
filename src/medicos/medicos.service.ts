import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateMedicoDto } from './dto/create-medico.dto.js';
import { UpdateMedicoDto } from './dto/update-medico.dto.js';

@Injectable()
export class MedicosService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.medico.findMany();
  }

  findOne(id: number) {
    return this.prisma.medico.findUnique({
      where: { id },
    });
  }

  create(createMedicoDto: CreateMedicoDto) {
    return this.prisma.medico.create({
      data: createMedicoDto,
    });
  }

  update(id: number, updateMedicoDto: UpdateMedicoDto) {
    return this.prisma.medico.update({
      where: { id },
      data: updateMedicoDto,
    });
  }

  remove(id: number) {
    return this.prisma.medico.delete({
      where: { id },
    });
  }
}
