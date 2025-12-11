import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CandidatosMasivosService } from './candidatos-masivos.service';
import { CandidatosMasivosController } from './candidatos-masivos.controller';
import { TblCandidatosCorto } from 'src/databases/models/devasign_asignarc_bd03/entities/TblCandidatosCorto';

@Module({
  imports: [
    TypeOrmModule.forFeature([TblCandidatosCorto]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/HojasDeVida',
        filename: (req, file, callback) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
          const ext = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        const allowedExtensions = [
          '.pdf',
          '.doc',
          '.docx',
          '.jpg',
          '.jpeg',
          '.png',
        ];
        const ext = extname(file.originalname).toLowerCase();
        if (allowedExtensions.includes(ext)) {
          callback(null, true);
        } else {
          callback(new Error('Formato de archivo no permitido'), false);
        }
      },
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
      },
    }),
  ],
  providers: [CandidatosMasivosService],
  controllers: [CandidatosMasivosController],
  exports: [CandidatosMasivosService],
})
export class CandidatosMasivosModule {}
