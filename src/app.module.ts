import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionModule } from './databases/connection/connection.module';
import { CandidatosMasivosModule } from './modules/candidatos-masivos/candidatos-masivos.module';
import { FormulariosModule } from './modules/formularios/formularios.module';
import { LogsModule } from './modules/logs/logs.module';
import { RequestLoggerInterceptor } from './common/interceptors/request-logger.interceptor';

@Module({
  imports: [
    ConnectionModule,
    CandidatosMasivosModule,
    FormulariosModule,
    LogsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestLoggerInterceptor,
    },
  ],
})
export class AppModule {}
