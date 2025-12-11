import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblclientes_checklist', { schema: 'devasign_asignarc_bd03' })
export class TblclientesChecklist {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id', unsigned: true })
  id: number;

  @Column('int', { name: 'IdCliente', unsigned: true })
  idCliente: number;

  @Column('varchar', { name: 'BPM', nullable: true, length: 5 })
  bpm: string | null;

  @Column('varchar', { name: 'Com_sagrilaft', nullable: true, length: 5 })
  comSagrilaft: string | null;

  @Column('varchar', { name: 'Com_tratam_datos', nullable: true, length: 5 })
  comTratamDatos: string | null;

  @Column('varchar', { name: 'Com_cam_comerc', nullable: true, length: 5 })
  comCamComerc: string | null;

  @Column('varchar', { name: 'Com_rut', nullable: true, length: 5 })
  comRut: string | null;

  @Column('varchar', { name: 'Com_declara_renta', nullable: true, length: 5 })
  comDeclaraRenta: string | null;

  @Column('varchar', { name: 'Com_estad_financ', nullable: true, length: 5 })
  comEstadFinanc: string | null;

  @Column('varchar', { name: 'Com_copi_cedu_RL', nullable: true, length: 5 })
  comCopiCeduRl: string | null;

  @Column('varchar', { name: 'Com_certif_banc', nullable: true, length: 5 })
  comCertifBanc: string | null;

  @Column('varchar', { name: 'Com_certif_SST', nullable: true, length: 5 })
  comCertifSst: string | null;

  @Column('varchar', { name: 'Com_contrato', nullable: true, length: 5 })
  comContrato: string | null;

  @Column('varchar', { name: 'Com_anexo_4', nullable: true, length: 5 })
  comAnexo_4: string | null;

  @Column('varchar', { name: 'Com_pagare', nullable: true, length: 5 })
  comPagare: string | null;

  @Column('varchar', { name: 'Com_requerimiento', nullable: true, length: 5 })
  comRequerimiento: string | null;

  @Column('varchar', { name: 'Com_temporal', nullable: true, length: 5 })
  comTemporal: string | null;

  @Column('varchar', { name: 'Com_flexible', nullable: true, length: 5 })
  comFlexible: string | null;

  @Column('varchar', { name: 'Com_indefinido', nullable: true, length: 5 })
  comIndefinido: string | null;

  @Column('varchar', { name: 'Com_aprendizaje', nullable: true, length: 5 })
  comAprendizaje: string | null;

  @Column('varchar', { name: 'Sel_conoc_emp', nullable: true, length: 5 })
  selConocEmp: string | null;

  @Column('varchar', { name: 'Sel_conoc_emp_asi', nullable: true, length: 5 })
  selConocEmpAsi: string | null;

  @Column('varchar', { name: 'Sel_procurad', nullable: true, length: 5 })
  selProcurad: string | null;

  @Column('varchar', { name: 'Sel_contralor', nullable: true, length: 5 })
  selContralor: string | null;

  @Column('varchar', { name: 'Sel_policia', nullable: true, length: 5 })
  selPolicia: string | null;

  @Column('varchar', { name: 'Sel_simir', nullable: true, length: 5 })
  selSimir: string | null;

  @Column('varchar', { name: 'Sel_adres', nullable: true, length: 5 })
  selAdres: string | null;

  @Column('varchar', { name: 'Sel_certif_EPS', nullable: true, length: 5 })
  selCertifEps: string | null;

  @Column('varchar', { name: 'Sel_certif_AFP', nullable: true, length: 5 })
  selCertifAfp: string | null;

  @Column('varchar', { name: 'Sel_convenio_cap', nullable: true, length: 5 })
  selConvenioCap: string | null;

  @Column('varchar', { name: 'Sel_consent_sustr', nullable: true, length: 5 })
  selConsentSustr: string | null;

  @Column('varchar', { name: 'Thu_poligrafo', nullable: true, length: 5 })
  thuPoligrafo: string | null;

  @Column('varchar', { name: 'Thu_anteced_esp', nullable: true, length: 5 })
  thuAntecedEsp: string | null;

  @Column('varchar', { name: 'Thu_visita_domici', nullable: true, length: 5 })
  thuVisitaDomici: string | null;

  @Column('varchar', { name: 'Thu_prueba_excel', nullable: true, length: 5 })
  thuPruebaExcel: string | null;

  @Column('varchar', { name: 'Thu_prueba_digitac', nullable: true, length: 5 })
  thuPruebaDigitac: string | null;

  @Column('varchar', { name: 'Thu_prueba_contab', nullable: true, length: 5 })
  thuPruebaContab: string | null;

  @Column('varchar', {
    name: 'Thu_prueba_conoc_sst',
    nullable: true,
    length: 5,
  })
  thuPruebaConocSst: string | null;

  @Column('varchar', {
    name: 'Thu_prueba_conoc_nom',
    nullable: true,
    length: 5,
  })
  thuPruebaConocNom: string | null;

  @Column('varchar', { name: 'Thu_prueba_proyec', nullable: true, length: 5 })
  thuPruebaProyec: string | null;

  @Column('varchar', { name: 'Vin_ctr_temp_req', nullable: true, length: 5 })
  vinCtrTempReq: string | null;

  @Column('varchar', { name: 'Vin_requisit_ctr', nullable: true, length: 5 })
  vinRequisitCtr: string | null;

  @Column('varchar', { name: 'Vin_indu_per_temp', nullable: true, length: 5 })
  vinInduPerTemp: string | null;

  @Column('varchar', { name: 'Vin_indu_sst', nullable: true, length: 5 })
  vinInduSst: string | null;

  @Column('varchar', { name: 'Vin_prueba_indu_sst', nullable: true, length: 5 })
  vinPruebaInduSst: string | null;

  @Column('varchar', { name: 'Vin_consent_info', nullable: true, length: 5 })
  vinConsentInfo: string | null;

  @Column('varchar', { name: 'Vin_pagare_instruc', nullable: true, length: 5 })
  vinPagareInstruc: string | null;

  @Column('varchar', { name: 'Vin_otrosi', nullable: true, length: 5 })
  vinOtrosi: string | null;

  @Column('varchar', { name: 'Vin_colill_pag', nullable: true, length: 5 })
  vinColillPag: string | null;

  @Column('varchar', {
    name: 'Vin_ctr_jorn_flexible',
    nullable: true,
    length: 5,
  })
  vinCtrJornFlexible: string | null;

  @Column('varchar', { name: 'Vin_autoriza_descu', nullable: true, length: 5 })
  vinAutorizaDescu: string | null;

  @Column('varchar', { name: 'Vin_consent_prev', nullable: true, length: 5 })
  vinConsentPrev: string | null;

  @Column('varchar', { name: 'Vin_rese_dactilar', nullable: true, length: 5 })
  vinReseDactilar: string | null;

  @Column('varchar', { name: 'Vin_autoriza_invest', nullable: true, length: 5 })
  vinAutorizaInvest: string | null;

  @Column('varchar', { name: 'Vin_hist_clin', nullable: true, length: 5 })
  vinHistClin: string | null;

  @Column('varchar', { name: 'Vin_control_dota', nullable: true, length: 5 })
  vinControlDota: string | null;

  @Column('varchar', { name: 'Vin_descr_cargo', nullable: true, length: 5 })
  vinDescrCargo: string | null;

  @Column('varchar', { name: 'Vin_otrosi_ruta', nullable: true, length: 5 })
  vinOtrosiRuta: string | null;

  @Column('varchar', { name: 'Vin_present_pers', nullable: true, length: 5 })
  vinPresentPers: string | null;

  @Column('varchar', { name: 'Vin_entrega_carne', nullable: true, length: 5 })
  vinEntregaCarne: string | null;

  @Column('varchar', {
    name: 'Vin_ctr_trabajo_temporal',
    nullable: true,
    length: 5,
  })
  vinCtrTrabajoTemporal: string | null;

  @Column('varchar', { name: 'Vin_otrosi_sabat', nullable: true, length: 5 })
  vinOtrosiSabat: string | null;

  @Column('varchar', { name: 'Vin_Aux_rodam', nullable: true, length: 5 })
  vinAuxRodam: string | null;

  @Column('varchar', { name: 'Vin_acuer_confid', nullable: true, length: 5 })
  vinAcuerConfid: string | null;

  @Column('varchar', { name: 'Vin_nodivul_privac', nullable: true, length: 5 })
  vinNodivulPrivac: string | null;

  @Column('varchar', {
    name: 'Vin_autoriza_protec_dat',
    nullable: true,
    length: 5,
  })
  vinAutorizaProtecDat: string | null;

  @Column('varchar', { name: 'Vin_estudio_socdemo', nullable: true, length: 5 })
  vinEstudioSocdemo: string | null;

  @Column('varchar', {
    name: 'Vin_formato_docs_ing',
    nullable: true,
    length: 5,
  })
  vinFormatoDocsIng: string | null;

  @Column('varchar', { name: 'Vin_claus_pag_bonif', nullable: true, length: 5 })
  vinClausPagBonif: string | null;

  @Column('date', { name: 'FServidor', default: () => 'CURRENT_TIMESTAMP' })
  fServidor: string;
}
