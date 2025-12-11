import { extname } from 'path';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { BadRequestException } from '@nestjs/common';

// Configuración de almacenamiento para multer
export const multerConfig = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, callback) => {
      const uniqueSuffix = `${uuidv4()}${extname(file.originalname)}`;
      callback(null, uniqueSuffix);
    },
  }),
};

// Filtro para validar tipos de archivos permitidos
export const fileFilter = (
  req: any,
  file: Express.Multer.File,
  callback: any,
) => {
  // Extensiones permitidas para hojas de vida
  const allowedExtensions = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'];
  const ext = extname(file.originalname).toLowerCase();

  if (allowedExtensions.includes(ext)) {
    callback(null, true);
  } else {
    callback(
      new BadRequestException(
        `Formato de archivo no permitido. Solo se aceptan: ${allowedExtensions.join(', ')}`,
      ),
      false,
    );
  }
};

// Validar tamaño máximo de archivo (5MB por defecto)
export const maxFileSize = 5 * 1024 * 1024; // 5MB en bytes

// Configuración completa de multer
export const multerOptions = {
  ...multerConfig,
  fileFilter: fileFilter,
  limits: {
    fileSize: maxFileSize,
  },
};
