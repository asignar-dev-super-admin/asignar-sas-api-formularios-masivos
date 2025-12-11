import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { LogsService } from './logs.service';

@ApiTags('logs')
@ApiSecurity('x-api-key')
@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get('requests')
  @ApiOperation({
    summary: 'Obtener estadísticas de peticiones',
    description: 'Retorna el contador total de peticiones y los últimos 100 registros',
  })
  @ApiResponse({
    status: 200,
    description: 'Estadísticas obtenidas exitosamente',
    schema: {
      type: 'object',
      properties: {
        totalRequests: { type: 'number', example: 150 },
        lastUpdate: { type: 'string', example: '2025-12-11T14:30:00.000Z' },
        requests: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              count: { type: 'number' },
              method: { type: 'string' },
              url: { type: 'string' },
              ip: { type: 'string' },
              timestamp: { type: 'string' },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'No hay registros de peticiones',
  })
  async getRequestStats() {
    return await this.logsService.getRequestStats();
  }

  @Get('requests/count')
  @ApiOperation({
    summary: 'Obtener solo el contador total',
    description: 'Retorna únicamente el número total de peticiones',
  })
  @ApiResponse({
    status: 200,
    description: 'Contador obtenido exitosamente',
    schema: {
      type: 'object',
      properties: {
        totalRequests: { type: 'number', example: 150 },
      },
    },
  })
  async getRequestCount() {
    return await this.logsService.getRequestCount();
  }
}
