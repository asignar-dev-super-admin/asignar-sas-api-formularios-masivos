import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblcandidatos', { schema: 'devasign_asignarc_bd03' })
export class Tblcandidatos {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id', unsigned: true })
  id: number;

  @Column('int', { name: 'Id_form', unsigned: true })
  idForm: number;

  @Column('int', { name: 'Id_m_cargo', unsigned: true })
  idMCargo: number;

  @Column('int', { name: 'Id_m_ciudad', unsigned: true })
  idMCiudad: number;

  @Column('varchar', { name: 'Ident', length: 30 })
  ident: string;

  @Column('varchar', { name: 'TipoIdent', length: 100 })
  tipoIdent: string;

  @Column('text', { name: 'Nombre' })
  nombre: string;

  @Column('text', { name: 'Email' })
  email: string;

  @Column('varchar', { name: 'NombreCargo', nullable: true, length: 200 })
  nombreCargo: string | null;

  @Column('int', { name: 'Edad', unsigned: true })
  edad: number;

  @Column('varchar', { name: 'Genero', length: 10 })
  genero: string;

  @Column('date', { name: 'FechaNaci' })
  fechaNaci: string;

  @Column('varchar', { name: 'Ciudad', nullable: true, length: 200 })
  ciudad: string | null;

  @Column('varchar', { name: 'Barrio', length: 100 })
  barrio: string;

  @Column('varchar', { name: 'NumeroCelular', length: 12 })
  numeroCelular: string;

  @Column('varchar', { name: 'NumeroWhatsapp', nullable: true, length: 15 })
  numeroWhatsapp: string | null;

  @Column('int', { name: 'Peso' })
  peso: number;

  @Column('varchar', { name: 'TallaCamisa', length: 8 })
  tallaCamisa: string;

  @Column('int', { name: 'TallaPantalones' })
  tallaPantalones: number;

  @Column('int', { name: 'TallaZapatos' })
  tallaZapatos: number;

  @Column('text', { name: 'NovedadMedica', nullable: true })
  novedadMedica: string | null;

  @Column('text', { name: 'DetNovedadMedi', nullable: true })
  detNovedadMedi: string | null;

  @Column('varchar', { name: 'NivelEstudios', length: 100 })
  nivelEstudios: string;

  @Column('varchar', { name: 'GradoCulminado', nullable: true, length: 30 })
  gradoCulminado: string | null;

  @Column('varchar', {
    name: 'GradoNombreFormacion',
    nullable: true,
    length: 200,
  })
  gradoNombreFormacion: string | null;

  @Column('varchar', { name: 'BPM', nullable: true, length: 10 })
  bpm: string | null;

  @Column('varchar', { name: 'EstaTrabajando', length: 10 })
  estaTrabajando: string;

  @Column('text', { name: 'CargoExp' })
  cargoExp: string;

  @Column('text', { name: 'DescripcionExp', nullable: true })
  descripcionExp: string | null;

  @Column('text', { name: 'CargosExp', nullable: true })
  cargosExp: string | null;

  @Column('text', { name: 'EmpresasExp', nullable: true })
  empresasExp: string | null;

  @Column('text', { name: 'FuncionesExp', nullable: true })
  funcionesExp: string | null;

  @Column('text', { name: 'CargoEspExp', nullable: true })
  cargoEspExp: string | null;

  @Column('text', { name: 'MeseroMiseAndPlace', nullable: true })
  meseroMiseAndPlace: string | null;

  @Column('text', { name: 'MeseroServAmerica', nullable: true })
  meseroServAmerica: string | null;

  @Column('text', { name: 'CamareraDuvet', nullable: true })
  camareraDuvet: string | null;

  @Column('text', { name: 'CamareraAmenites', nullable: true })
  camareraAmenites: string | null;

  @Column('text', { name: 'StewardLavaMaqui', nullable: true })
  stewardLavaMaqui: string | null;

  @Column('text', { name: 'StewardPrelavaLo', nullable: true })
  stewardPrelavaLo: string | null;

  @Column('text', { name: 'AuxCocTiposCrte', nullable: true })
  auxCocTiposCrte: string | null;

  @Column('text', { name: 'AuxCocCrteJuliana', nullable: true })
  auxCocCrteJuliana: string | null;

  @Column('text', { name: 'AuxCocFriaCal', nullable: true })
  auxCocFriaCal: string | null;

  @Column('text', { name: 'AuxCocSlsBechamel', nullable: true })
  auxCocSlsBechamel: string | null;

  @Column('varchar', { name: 'AuxLavandExpMaqui', nullable: true, length: 10 })
  auxLavandExpMaqui: string | null;

  @Column('varchar', { name: 'SpkExperiencia', nullable: true, length: 10 })
  spkExperiencia: string | null;

  @Column('varchar', { name: 'SpkConFamiliar', nullable: true, length: 10 })
  spkConFamiliar: string | null;

  @Column('varchar', { name: 'TerminosYCond', nullable: true, length: 10 })
  terminosYCond: string | null;

  @Column('varchar', { name: 'Califica', nullable: true, length: 200 })
  califica: string | null;

  @Column('timestamp', {
    name: 'FServidor',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fServidor: Date;
}
