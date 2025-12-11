import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsOptional,
  IsNotEmpty,
  MaxLength,
  Min,
  IsNumberString,
  IsIn,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCandidatoMasivoDto {
  @ApiPropertyOptional({
    description: 'ID del formulario asociado',
    example: 1,
    type: Number,
  })
  @IsOptional()
  @IsInt({ message: 'El ID del formulario debe ser un número entero' })
  @Min(1, { message: 'El ID del formulario debe ser mayor a 0' })
  idFormulario?: number;

  @ApiProperty({
    description: 'Nombres completos del candidato',
    example: 'Juan Carlos Pérez García',
    maxLength: 1000,
    type: String,
  })
  @IsNotEmpty({ message: 'Los nombres son obligatorios' })
  @IsString({ message: 'Los nombres deben ser un texto' })
  @MaxLength(1000, {
    message: 'Los nombres no pueden exceder los 1000 caracteres',
  })
  nombres: string;

  @ApiPropertyOptional({
    description: 'Tipo de identificación (CC, TI, CE, PAS, etc.)',
    example: 'CC',
    maxLength: 10,
    type: String,
  })
  @IsOptional()
  @IsString({ message: 'El tipo de identificación debe ser un texto' })
  @MaxLength(10, {
    message: 'El tipo de identificación no puede exceder los 10 caracteres',
  })
  @IsIn(['CC', 'TI', 'CE', 'PAS', 'NIT', 'DIE', 'OT'], {
    message:
      'El tipo de identificación debe ser uno de los siguientes: CC, TI, CE, PAS, NIT, DIE, OT',
  })
  tipoIdent?: string;

  @ApiPropertyOptional({
    description: 'Número de identificación',
    example: '1234567890',
    type: String,
  })
  @IsOptional()
  @Transform(({ value }) => (value === '' || value === null ? null : value))
  @IsNumberString(
    {},
    { message: 'La identificación debe contener solo números' },
  )
  ident?: string;

  @ApiPropertyOptional({
    description: 'Número de teléfono',
    example: '3001234567',
    type: String,
  })
  @IsOptional()
  @Transform(({ value }) => (value === '' || value === null ? null : value))
  @IsNumberString({}, { message: 'El teléfono debe contener solo números' })
  telefono?: string;

  @ApiPropertyOptional({
    description: 'Número de WhatsApp',
    example: '3009876543',
    type: String,
  })
  @IsOptional()
  @Transform(({ value }) => (value === '' || value === null ? null : value))
  @IsNumberString({}, { message: 'El WhatsApp debe contener solo números' })
  whatsApp?: string;

  @ApiPropertyOptional({
    description: 'Edad del candidato',
    example: 25,
    minimum: 0,
    maximum: 120,
    type: Number,
  })
  @IsOptional()
  @IsInt({ message: 'La edad debe ser un número entero' })
  @Min(0, { message: 'La edad debe ser mayor o igual a 0' })
  edad?: number;
}
