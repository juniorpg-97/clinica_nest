import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt } from 'class-validator';

export class CreateCitaDto {
  @ApiProperty({
    example: '2026-09-25T00:00:00.000Z',
    description: 'Fecha de la cita',
  })
  @IsDateString()
  fecha: string;

  @ApiProperty({
    example: '2026-09-25T15:00:00.000Z',
    description: 'Hora de la cita',
  })
  @IsDateString()
  hora: string;

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
