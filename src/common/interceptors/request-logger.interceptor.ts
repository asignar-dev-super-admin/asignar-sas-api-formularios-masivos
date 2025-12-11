import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { promises as fs } from 'fs';
import { join } from 'path';

@Injectable()
export class RequestLoggerInterceptor implements NestInterceptor {
  private readonly logFilePath = join(
    process.cwd(),
    'logs',
    'request-count.log',
  );

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const { method, url, ip } = request;
    const timestamp = new Date().toISOString();

    // Incrementar contador y guardar en archivo
    await this.logRequest(method, url, ip, timestamp);

    return next.handle().pipe(
      tap(() => {
        // Aquí podrías agregar más logs si lo necesitas
      }),
    );
  }

  private async logRequest(
    method: string,
    url: string,
    ip: string,
    timestamp: string,
  ): Promise<void> {
    try {
      // Leer el contenido actual del archivo
      let currentCount = 0;
      let logs: any[] = [];

      try {
        const fileContent = await fs.readFile(this.logFilePath, 'utf-8');
        const data = JSON.parse(fileContent);
        currentCount = data.totalRequests || 0;
        logs = data.requests || [];
      } catch (error) {
        // Si el archivo no existe o está vacío, empezamos desde cero
      }

      // Incrementar contador
      currentCount++;

      // Agregar nuevo log
      logs.push({
        count: currentCount,
        method,
        url,
        ip,
        timestamp,
      });

      // Guardar solo los últimos 100 registros
      if (logs.length > 100) {
        logs = logs.slice(-100);
      }

      // Escribir en el archivo
      const logData = {
        totalRequests: currentCount,
        lastUpdate: timestamp,
        requests: logs,
      };

      await fs.writeFile(this.logFilePath, JSON.stringify(logData, null, 2));
    } catch (error) {
      console.error('Error al escribir en el archivo de logs:', error);
    }
  }
}
