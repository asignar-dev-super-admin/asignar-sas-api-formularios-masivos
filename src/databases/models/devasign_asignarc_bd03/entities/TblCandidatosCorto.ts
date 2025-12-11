import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_candidatos_corto', { schema: 'devasign_asignarc_bd03' })
export class TblCandidatosCorto {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id' })
  id: number;

  @Column('int', { name: 'Id_Formulario', nullable: true })
  idFormulario: number | null;

  @Column('varchar', { name: 'Nombres', nullable: true, length: 1000 })
  nombres: string | null;

  @Column('varchar', { name: 'TipoIdent', nullable: true, length: 10 })
  tipoIdent: string | null;

  @Column('bigint', { name: 'Ident', nullable: true })
  ident: string | null;

  @Column('bigint', { name: 'Telefono', nullable: true })
  telefono: string | null;

  @Column('bigint', { name: 'WhatsApp', nullable: true })
  whatsApp: string | null;

  @Column('int', { name: 'Edad', nullable: true })
  edad: number | null;

  @Column('text', { name: 'HojaDeVida', nullable: true })
  hojaDeVida: string | null;

  @Column('datetime', {
    name: 'CreatedAt',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;
}
