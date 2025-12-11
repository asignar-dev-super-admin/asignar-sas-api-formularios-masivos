import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblformularios', { schema: 'devasign_asignarc_bd03' })
export class Tblformularios {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id', unsigned: true })
  id: number;

  @Column('int', { name: 'Id_cargo', unsigned: true })
  idCargo: number;

  @Column('int', { name: 'Id_ciudad', unsigned: true })
  idCiudad: number;

  @Column('int', { name: 'Id_sede', unsigned: true })
  idSede: number;

  @Column('date', { name: 'Fec_convocatoria' })
  fecConvocatoria: string;

  @Column('varchar', { name: 'Nombre_cargo', length: 255 })
  nombreCargo: string;

  @Column('varchar', { name: 'Nombre_ciudad', length: 255 })
  nombreCiudad: string;

  @Column('varchar', { name: 'Titulo', length: 255 })
  titulo: string;

  @Column('text', { name: 'Descripcion' })
  descripcion: string;

  @Column('varchar', { name: 'Url_formulario', length: 255 })
  urlFormulario: string;

  @Column('int', { name: 'Id_m_usu_sistema', unsigned: true })
  idMUsuSistema: number;

  @Column('timestamp', {
    name: 'FServidor',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fServidor: Date;
}
