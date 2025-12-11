import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { envs } from 'src/config/envs';
import { DataSource } from 'typeorm';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: envs.db_type as 'mysql' | 'postgres',
      host: envs.db_host,
      port: envs.db_port,
      username: envs.db_user,
      password: envs.db_password,
      database: envs.db_database,
      entities: [
        __dirname + '/../models/devasign_asignarc_bd03/entities/*.{ts,js}',
      ],
      synchronize: true,
      charset: 'utf8mb4',
      extra: {
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
      },
    }),
  ],
  exports: [TypeOrmModule],
})
//MAPEAR BASE DE DATOS
//typeorm-model-generator -h localhost -d cs_lab_bd_01 -u root -x "" -e mysql -o ./src/databases/models/cs_lab_bd_01
export class ConnectionModule {
  constructor(private dataSource: DataSource) {
    if (this.dataSource.isInitialized) {
      console.log('✅ Base de datos conectada correctamente!');
    } else {
      console.log('❌ La base de datos NO se pudo conectar');
    }
  }
}
