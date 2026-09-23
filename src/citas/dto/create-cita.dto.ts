import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsInt } from 'class-validator';

export enum EstadoCita {
  PROGRAMADA = 'PROGRAMADA',
  COMPLETADA = 'COMPLETADA',
  CANCELADA = 'CANCELADA',
}

export class CreateCitaDto {
  @ApiProperty({
    example: '2026-09-25T10:00:00.000Z',
    description: 'Fecha y hora programada para la cita',
  })
  @IsDateString()
  fecha: string;

  @ApiProperty({
    example: 'PROGRAMADA',
    enum: EstadoCita,
    description: 'Estado de la cita',
  })
  @IsEnum(EstadoCita)
  estado: EstadoCita;

  @ApiProperty({
    example: 1,
    description: 'ID del paciente',
  })
  @IsInt()
  pacienteId: number;

  @ApiProperty({
    example: 1,
    description: 'ID del médico',
  })
  @IsInt()
  medicoId: number;
}
