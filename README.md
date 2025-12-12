# 🚀 API Candidatos Masivos - Sistema de Gestión de Candidatos

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">API REST para la gestión masiva de candidatos con sistema de formularios, carga de archivos y monitoreo de peticiones.</p>

## 📋 Descripción

API desarrollada con NestJS para gestionar el registro masivo de candidatos en el sistema de formularios. Incluye funcionalidades de autenticación mediante API Key, carga de archivos (hojas de vida), validación de datos y sistema de logs para monitoreo de peticiones.

## 🏗️ Arquitectura

Este proyecto sigue una arquitectura modular basada en NestJS con las siguientes capas:

```
├── Controllers (Capa de Presentación)
│   └── Manejo de peticiones HTTP y validación de entrada
├── Services (Capa de Lógica de Negocio)
│   └── Procesamiento de datos y reglas de negocio
├── Repositories (Capa de Datos)
│   └── TypeORM para interacción con MySQL
├── Guards (Seguridad)
│   └── Autenticación mediante API Key
├── Interceptors (Middleware)
│   └── Logging automático de peticiones
└── DTOs (Validación)
    └── Class-validator para validación de datos
```

## 📁 Estructura del Proyecto

```
api-candidatos-masivos-corto/
│
├── src/
│   ├── app.module.ts                    # Módulo principal
│   ├── main.ts                          # Punto de entrada
│   │
│   ├── common/                          # Recursos compartidos
│   │   ├── decorators/
│   │   │   └── public.decorator.ts     # Decorador para rutas públicas
│   │   ├── guards/
│   │   │   └── api-key.guard.ts        # Guard de autenticación
│   │   ├── interceptors/
│   │   │   └── request-logger.interceptor.ts  # Logger de peticiones
│   │   └── utils/
│   │       └── file-upload.util.ts     # Utilidades para carga de archivos
│   │
│   ├── config/
│   │   └── envs.ts                      # Configuración de variables de entorno
│   │
│   ├── databases/
│   │   ├── connection/
│   │   │   └── connection.module.ts    # Configuración de TypeORM
│   │   └── models/
│   │       └── devasign_asignarc_bd03/
│   │           └── entities/
│   │               ├── TblCandidatosCorto.ts
│   │               ├── Tblformularios.ts
│   │               └── ...
│   │
│   ├── modules/
│   │   ├── candidatos-masivos/         # Módulo de candidatos
│   │   │   ├── candidatos-masivos.controller.ts
│   │   │   ├── candidatos-masivos.service.ts
│   │   │   ├── candidatos-masivos.module.ts
│   │   │   └── dto/
│   │   │       └── createCandidatoMasivo.dto.ts
│   │   │
│   │   ├── formularios/                # Módulo de formularios
│   │   │   ├── formularios.controller.ts
│   │   │   ├── formularios.service.ts
│   │   │   └── formularios.module.ts
│   │   │
│   │   └── logs/                       # Módulo de logs
│   │       ├── logs.controller.ts
│   │       ├── logs.service.ts
│   │       └── logs.module.ts
│   │
│   └── types/
│       └── httpRespond.ts              # Tipos personalizados
│
├── uploads/                            # Archivos subidos (persistentes)
│   └── HojasDeVida/
│
├── logs/                               # Logs de peticiones (persistentes)
│   └── request-count.log
│
├── test/                               # Tests E2E
│
├── .env                                # Variables de entorno
├── .dockerignore                       # Archivos ignorados por Docker
├── Dockerfile                          # Configuración de Docker
├── docker-compose.yml                  # Orquestación de contenedores
├── nest-cli.json                       # Configuración de NestJS CLI
├── package.json                        # Dependencias del proyecto
├── tsconfig.json                       # Configuración de TypeScript
└── README.md                           # Este archivo
```

## 🛠️ Tecnologías Utilizadas

### Backend Framework
- **NestJS** `^10.0.0` - Framework progresivo de Node.js
- **TypeScript** `^5.1.3` - Superset tipado de JavaScript
- **Node.js** `18.20.4` - Runtime de JavaScript

### Base de Datos
- **TypeORM** `^0.3.28` - ORM para TypeScript y JavaScript
- **MySQL2** `^3.15.3` - Cliente MySQL para Node.js

### Validación y Transformación
- **class-validator** `^0.14.3` - Validación basada en decoradores
- **class-transformer** `^0.5.1` - Transformación de objetos

### Documentación
- **Swagger/OpenAPI** `@nestjs/swagger ^11.2.3` - Documentación de API

### Carga de Archivos
- **Multer** - Middleware para `multipart/form-data`
- **UUID** - Generación de nombres únicos para archivos

### Seguridad
- **API Key Authentication** - Autenticación mediante header personalizado
- **CORS** - Configurado para todos los orígenes
- **Joi** `^17.13.3` - Validación de variables de entorno

### Utilidades
- **dotenv** `^17.2.3` - Gestión de variables de entorno
- **RxJS** `^7.8.1` - Programación reactiva

### DevOps
- **Docker** `27.2.0` - Containerización
- **Docker Compose** - Orquestación de contenedores

## 🔧 Requisitos Previos

```bash
Node.js: 18.20.4
npm: 10.7.0
MySQL: 8.0+
Docker: 27.2.0+ (opcional)
```

## ⚙️ Configuración

### 1. Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```env
# Servidor
PORT=3000

# Base de Datos
DB_TYPE=mysql
DB_HOST=192.99.84.45
DB_PORT=3306
DB_USER=devasign_userbd
DB_PASSWORD=your_password_here
DB_DATABASE=devasign_asignarc_bd03

# Seguridad
API_KEY=your_api_key_here
```

### 2. Instalación de Dependencias

```bash
npm install --legacy-peer-deps
```

## 🚀 Ejecución del Proyecto

### Desarrollo Local

```bash
# Modo desarrollo con hot-reload
npm run start:dev

# Modo desarrollo
npm run start

# Modo debug
npm run start:debug
```

La API estará disponible en: `http://localhost:3000`
Documentación Swagger: `http://localhost:3000/api/docs`

### Producción

```bash
# Compilar el proyecto
npm run build

# Ejecutar en producción
npm run start:prod
```

## 🐳 Docker

### Construcción y Ejecución con Docker Compose

```bash
# Construir y ejecutar
docker-compose up -d --build

# Ver logs
docker-compose logs -f api

# Detener
docker-compose down

# Reiniciar
docker-compose restart
```

### Construcción Manual

```bash
# Construir imagen
docker build -t api-candidatos-masivos .

# Ejecutar contenedor
docker run -d \
  --name api-candidatos-masivos \
  -p 3000:3000 \
  --env-file .env \
  -v uploads-data:/app/uploads \
  -v logs-data:/app/logs \
  api-candidatos-masivos
```

### Persistencia de Datos

Los volúmenes Docker están configurados para persistir:
- `/app/uploads` - Archivos de hojas de vida
- `/app/logs` - Logs de peticiones

Ver más detalles en [DOCKER-PERSISTENCE.md](./DOCKER-PERSISTENCE.md)

## 📚 Documentación de la API

### Swagger UI

Accede a la documentación interactiva en:
```
http://localhost:3000/api/docs
```

### Autenticación

Todas las rutas (excepto descarga de archivos) requieren el header:
```
x-api-key: your_api_key_here
```

### Endpoints Principales

#### Candidatos

**POST** `/api/candidatos-masivos`
- Crear nuevo candidato
- Soporta `multipart/form-data` para carga de archivos
- Campos: nombres, tipoIdent, ident, telefono, whatsApp, edad, hojaDeVida (archivo opcional)

**GET** `/api/candidatos-masivos/archivo/:filename`
- Descargar/visualizar hoja de vida
- No requiere autenticación
- Renderiza PDFs e imágenes en el navegador

#### Formularios

**GET** `/api/formularios`
- Listar todos los formularios

**GET** `/api/formularios/:id`
- Obtener formulario por ID

#### Logs

**GET** `/api/logs/requests`
- Obtener estadísticas completas de peticiones
- Retorna: total de peticiones, última actualización, historial (últimas 100)

**GET** `/api/logs/requests/count`
- Obtener solo el contador total de peticiones

## 📊 Sistema de Logs

El sistema registra automáticamente todas las peticiones en `logs/request-count.log`:

```json
{
  "totalRequests": 150,
  "lastUpdate": "2025-12-11T14:30:00.000Z",
  "requests": [
    {
      "count": 150,
      "method": "POST",
      "url": "/api/candidatos-masivos",
      "ip": "::1",
      "timestamp": "2025-12-11T14:30:00.000Z"
    }
  ]
}
```

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests en modo watch
npm run test:watch

# Cobertura de tests
npm run test:cov

# Tests E2E
npm run test:e2e
```

## 🔒 Seguridad

### API Key Authentication
- Todas las rutas están protegidas con API Key
- Header requerido: `x-api-key`
- El endpoint de descarga de archivos es público

### Validación de Datos
- DTOs con class-validator
- Transformación automática de tipos
- Sanitización de entrada

### CORS
- Configurado para aceptar todos los orígenes
- Métodos permitidos: GET, POST, PUT, PATCH, DELETE, OPTIONS

### Carga de Archivos
- Formatos permitidos: PDF, DOC, DOCX, JPG, JPEG, PNG
- Tamaño máximo: 5MB por archivo
- Nombres únicos generados automáticamente
- Almacenamiento en volumen persistente

## 📈 Características Principales

### ✅ Gestión de Candidatos
- Registro de candidatos con validación completa
- Prevención de duplicados por formulario + identificación
- Carga opcional de hojas de vida
- Transformación automática de datos vacíos a null

### ✅ Sistema de Archivos
- Carga de archivos mediante multipart/form-data
- Almacenamiento organizado en `/uploads/HojasDeVida`
- Renderizado de PDFs e imágenes en navegador
- Persistencia de datos con volúmenes Docker

### ✅ Monitoreo y Logs
- Contador automático de peticiones
- Registro de método, URL, IP y timestamp
- Historial de últimas 100 peticiones
- Endpoints dedicados para consulta de estadísticas

### ✅ Documentación
- Swagger UI interactivo
- Documentación completa de endpoints
- Ejemplos de uso
- Esquemas de respuesta

## 🔄 Flujo de Trabajo

### Registro de Candidato

1. Cliente envía petición POST a `/api/candidatos-masivos`
2. Guard valida x-api-key
3. ValidationPipe valida y transforma el DTO
4. Service verifica duplicados (formulario + identificación)
5. Si hay archivo, Multer lo guarda en `/uploads/HojasDeVida`
6. Se registra en base de datos con ruta del archivo
7. Interceptor registra la petición en logs
8. Respuesta con datos del candidato creado

### Descarga de Archivo

1. Cliente accede a `/api/candidatos-masivos/archivo/:filename`
2. Decorador @Public() permite acceso sin API Key
3. Controller verifica existencia del archivo
4. Configura headers según tipo de archivo
5. Content-Disposition: inline (renderiza en navegador)
6. Retorna archivo con Content-Type apropiado

## 🌐 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `PORT` | Puerto del servidor | `3000` |
| `DB_TYPE` | Tipo de base de datos | `mysql` |
| `DB_HOST` | Host de la base de datos | `192.99.84.45` |
| `DB_PORT` | Puerto de la base de datos | `3306` |
| `DB_USER` | Usuario de la base de datos | `devasign_userbd` |
| `DB_PASSWORD` | Contraseña de la base de datos | `your_password` |
| `DB_DATABASE` | Nombre de la base de datos | `devasign_asignarc_bd03` |
| `API_KEY` | Clave de autenticación | `your_secret_key` |

## 🐛 Troubleshooting

### Puerto 3000 en uso
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Docker no inicia
```bash
# Reiniciar Docker Desktop
# Verificar que WSL2 esté habilitado (Windows)
docker --version
docker ps
```

### Error de dependencias en Docker
```bash
# Limpiar cache y reconstruir
docker system prune -a
docker-compose build --no-cache
docker-compose up -d
```

### Error de conexión a base de datos
- Verificar credenciales en `.env`
- Verificar que el host sea accesible
- Verificar que el usuario tenga permisos

## 📝 Scripts Disponibles

```json
{
  "start": "Inicia la aplicación",
  "start:dev": "Inicia con hot-reload",
  "start:debug": "Inicia en modo debug",
  "start:prod": "Inicia en producción",
  "build": "Compila TypeScript a JavaScript",
  "format": "Formatea código con Prettier",
  "lint": "Ejecuta ESLint y corrige errores",
  "test": "Ejecuta tests unitarios",
  "test:watch": "Tests en modo watch",
  "test:cov": "Tests con cobertura",
  "test:e2e": "Tests end-to-end"
}
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y no tiene licencia pública.

## 👥 Autores

- **Asignar SAS** - [asignar-dev-super-admin](https://github.com/asignar-dev-super-admin)

## 🔗 Enlaces Útiles

- [Documentación de NestJS](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [Swagger/OpenAPI](https://swagger.io/)
- [Docker Documentation](https://docs.docker.com/)

## 📞 Soporte

Para soporte y consultas, contactar al equipo de desarrollo de Asignar SAS.

---

**Desarrollado con ❤️ usando NestJS**
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
