import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePacienteDto {
  @ApiProperty({
    example: 'Juan',
    description: 'Nombre del paciente',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    example: 'Perez',
    description: 'Apellido paterno del paciente',
  })
  @IsString()
  @IsNotEmpty()
  apellidoPaterno: string;

  @ApiProperty({
    example: 'Lopez',
    description: 'Apellido materno del paciente',
    required: false,
  })
  @IsOptional()
  @IsString()
  apellidoMaterno?: string;

  @ApiProperty({
    example: '12345678',
    description: 'DNI del paciente',
  })
  @IsString()
  @IsNotEmpty()
  dni: string;

  @ApiProperty({
    example: 'juan@mail.com',
    description: 'Correo electrónico del paciente',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '987654321',
    description: 'Número telefónico del paciente',
    required: false,
  })
  @IsOptional()
  @IsString()
  telefono?: string;

  @ApiProperty({
    example: '2001-01-01',
    description: 'Fecha de nacimiento del paciente',
  })
  @IsDateString()
  fechaNacimiento: string;
}
