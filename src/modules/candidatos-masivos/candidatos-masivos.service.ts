import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateCandidatoMasivoDto } from './dto/createCandidatoMasivo.dto';
import { HttpRespond } from 'src/types/httpRespond';
import { TblCandidatosCorto } from 'src/databases/models/devasign_asignarc_bd03/entities/TblCandidatosCorto';

@Injectable()
export class CandidatosMasivosService {
  constructor(
    @InjectRepository(TblCandidatosCorto)
    private readonly candidatosRepository: Repository<TblCandidatosCorto>,
    @InjectDataSource() private dataSource: DataSource,
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

  async getCandidates(): Promise<HttpRespond> {
    try {
      const candidates = await this.dataSource.query(
        `SELECT
                t1.Id,
                t1.Id_Formulario,
                t2.Titulo AS 'TituloFormulario',
                t2.Nombre_ciudad AS 'CiudadFormulario',
                t1.Nombres,
                t1.TipoIdent,
                t1.Ident,
                t1.Telefono,
                t1.WhatsApp,
                t1.Edad,
                t1.HojaDeVida,
                t1.CreatedAt AS 'FechaPostulacion'
            FROM
                tbl_candidatos_corto t1
            INNER JOIN tblformularios t2 ON
                t1.Id_Formulario = t2.Id;`,
      );

      return {
        result: true,
        data: candidates,
      };
    } catch (error) {
      console.error('Error al obtener los candidatos:', error);
      return {
        result: false,
        data: 'Error al obtener los candidatos',
      };
    }
  }
}
