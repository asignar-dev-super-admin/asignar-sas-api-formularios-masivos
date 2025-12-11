import { Injectable, NotFoundException } from '@nestjs/common';
import { promises as fs } from 'fs';
import { join } from 'path';

@Injectable()
export class LogsService {
  private readonly logFilePath = join(process.cwd(), 'logs', 'request-count.log');

  async getRequestStats(): Promise<any> {
    try {
      const fileContent = await fs.readFile(this.logFilePath, 'utf-8');
      const data = JSON.parse(fileContent);
      return data;
    } catch (error) {
      throw new NotFoundException('No hay registros de peticiones disponibles');
    }
  }

  async getRequestCount(): Promise<{ totalRequests: number }> {
    try {
      const fileContent = await fs.readFile(this.logFilePath, 'utf-8');
      const data = JSON.parse(fileContent);
      return { totalRequests: data.totalRequests || 0 };
    } catch (error) {
      return { totalRequests: 0 };
    }
  }
}
