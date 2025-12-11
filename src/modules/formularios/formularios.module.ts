import { Module } from '@nestjs/common';
import { FormulariosService } from './formularios.service';
import { FormulariosController } from './formularios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tblformularios } from 'src/databases/models/devasign_asignarc_bd03/entities/Tblformularios';

@Module({
  imports: [TypeOrmModule.forFeature([Tblformularios])],
  providers: [FormulariosService],
  controllers: [FormulariosController],
})
export class FormulariosModule {}
