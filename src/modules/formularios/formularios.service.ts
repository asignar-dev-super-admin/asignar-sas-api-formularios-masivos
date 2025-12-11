import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tblformularios } from 'src/databases/models/devasign_asignarc_bd03/entities/Tblformularios';
import { HttpRespond } from 'src/types/httpRespond';
import { Repository } from 'typeorm';

@Injectable()
export class FormulariosService {
  constructor(
    @InjectRepository(Tblformularios)
    private readonly tblformulariosRepository: Repository<Tblformularios>,
  ) {}

  async getFormularios(): Promise<HttpRespond> {
    try {
      const formularios = await this.tblformulariosRepository.find();

      return {
        result: true,
        data: formularios,
      };
    } catch (error) {
      console.error('Error al obtener los formularios:', error);
      return {
        result: false,
        data: 'Error al obtener los formularios',
      };
    }
  }
  async getFormulariosById(id: number): Promise<HttpRespond> {
    try {
      const formulario = await this.tblformulariosRepository.findOneBy({
        id: id,
      });

      return {
        result: true,
        data: formulario,
      };
    } catch (error) {
      console.error('Error al obtener el formulario:', error);
      return {
        result: false,
        data: 'Error al obtener el formulario',
      };
    }
  }
}
