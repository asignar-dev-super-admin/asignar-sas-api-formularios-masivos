import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Get,
  Param,
  Res,
  NotFoundException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiSecurity,
  ApiConsumes,
} from '@nestjs/swagger';
import { Response } from 'express';
import { join } from 'path';
import { existsSync } from 'fs';
import { CandidatosMasivosService } from './candidatos-masivos.service';
import { CreateCandidatoMasivoDto } from './dto/createCandidatoMasivo.dto';
import { Public } from '../../common/decorators/public.decorator';

@ApiTags('candidatos')
@ApiSecurity('x-api-key')
@Controller('candidatos-masivos')
export class CandidatosMasivosController {
  constructor(
    private readonly candidatosMasivosService: CandidatosMasivosService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('hojaDeVida'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    summary: 'Crear un nuevo candidato',
    description:
      'Registra un nuevo candidato en el sistema con su hoja de vida (opcional)',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        idFormulario: { type: 'number', example: 1 },
        nombres: { type: 'string', example: 'Juan Carlos Pérez García' },
        tipoIdent: { type: 'string', example: 'CC' },
        ident: { type: 'string', example: '1234567890' },
        telefono: { type: 'string', example: '3001234567' },
        whatsApp: { type: 'string', example: '3009876543' },
        edad: { type: 'number', example: 25 },
        hojaDeVida: {
          type: 'string',
          format: 'binary',
          description:
            'Archivo de hoja de vida (PDF, DOC, DOCX, JPG, PNG) - Opcional',
        },
      },
      required: ['nombres'],
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Candidato creado exitosamente',
  })
  @ApiResponse({
    status: 400,
    description: 'Datos inválidos o formato de archivo no permitido',
  })
  async create(
    @Body() createCandidatoMasivoDto: CreateCandidatoMasivoDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return await this.candidatosMasivosService.create(
      createCandidatoMasivoDto,
      file,
    );
  }

  @Public()
  @Get('archivo/:filename')
  @ApiOperation({
    summary: 'Descargar o visualizar archivo de hoja de vida',
    description:
      'Obtiene el archivo de hoja de vida de un candidato. Este endpoint no requiere x-api-key.',
  })
  @ApiResponse({
    status: 200,
    description: 'Archivo encontrado',
    content: {
      'application/pdf': {},
      'image/jpeg': {},
      'image/png': {},
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Archivo no encontrado',
  })
  async getFile(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = join(process.cwd(), 'uploads/HojasDeVida', filename);

    if (!existsSync(filePath)) {
      throw new NotFoundException('Archivo no encontrado');
    }

    // Obtener la extensión del archivo
    const ext = filename.split('.').pop()?.toLowerCase();

    // Configurar el tipo de contenido según la extensión
    const contentTypes: { [key: string]: string } = {
      pdf: 'application/pdf',
      doc: 'application/msword',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
    };

    const contentType = contentTypes[ext || ''] || 'application/octet-stream';

    // Establecer headers para visualización en el navegador
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `inline; filename="${filename}"`);

    return res.sendFile(filePath);
  }
}
