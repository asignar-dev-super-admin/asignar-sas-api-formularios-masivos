import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FormulariosService } from './formularios.service';
import { ApiOperation, ApiParam, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('Formularios')
@ApiSecurity('x-api-key')
@Controller('formularios')
export class FormulariosController {
  constructor(private readonly formulariosService: FormulariosService) {}

  @Get()
  @ApiOperation({
    summary: 'Obtener todos los formularios',
    description:
      'Recupera una lista de todos los formularios disponibles en el sistema',
  })
  async getFormularios() {
    return await this.formulariosService.getFormularios();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtener un formulario por ID',
    description: 'Recupera un formulario específico utilizando su ID',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del formulario a recuperar',
    required: true,
  })
  async getFormulariosById(@Param('id', ParseIntPipe) id: number) {
    return await this.formulariosService.getFormulariosById(id);
  }
}
