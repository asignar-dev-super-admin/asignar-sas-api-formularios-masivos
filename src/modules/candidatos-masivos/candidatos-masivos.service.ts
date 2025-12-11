import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCandidatoMasivoDto } from './dto/createCandidatoMasivo.dto';
import { HttpRespond } from 'src/types/httpRespond';
import { TblCandidatosCorto } from 'src/databases/models/devasign_asignarc_bd03/entities/TblCandidatosCorto';

@Injectable()
export class CandidatosMasivosService {
  constructor(
    @InjectRepository(TblCandidatosCorto)
    private readonly candidatosRepository: Repository<TblCandidatosCorto>,
  ) {}

  async create(
    createCandidatoMasivoDto: CreateCandidatoMasivoDto,
    file?: Express.Multer.File,
  ): Promise<HttpRespond> {
    try {
      // consultamos si el candidato ya exixste para ese formulario

      const existingCandidato = await this.candidatosRepository.findOne({
        where: {
          idFormulario: createCandidatoMasivoDto.idFormulario,
          ident: createCandidatoMasivoDto.ident,
        },
      });

      if (existingCandidato) {
        return {
          result: false,
          data: 'El Candidato ya Diligencio Este Formulario',
        };
      }

      // Si se subió un archivo, guardamos solo el nombre
      const hojaDeVidaPath = file ? file.filename : null;

      const candidato = this.candidatosRepository.create({
        ...createCandidatoMasivoDto,
        hojaDeVida: hojaDeVidaPath,
      });

      await this.candidatosRepository.save(candidato);
      return {
        result: true,
        data: {
          ...candidato,
          hojaDeVidaUrl: hojaDeVidaPath ? hojaDeVidaPath : null,
        },
      };
    } catch (error) {
      console.error('Error al crear el candidato:', error);
      return {
        result: false,
        data: 'Error al crear el candidato',
      };
    }
  }
}
