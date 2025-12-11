# Docker - Persistencia de Datos

## 📦 Volúmenes Configurados

Este proyecto tiene configurada la persistencia de datos para:
- **`/app/uploads`** - Archivos de hojas de vida
- **`/app/logs`** - Logs de peticiones

## 🚀 Comandos Docker

### Con Docker Compose (Recomendado)

**Construir y ejecutar:**
```bash
docker-compose up -d --build
```

**Detener:**
```bash
docker-compose down
```

**Detener Y ELIMINAR volúmenes (¡Cuidado! Borra los datos):**
```bash
docker-compose down -v
```

**Ver logs:**
```bash
docker-compose logs -f api
```

**Reiniciar:**
```bash
docker-compose restart
```

### Con Docker directamente

**Construir imagen:**
```bash
docker build -t api-candidatos-masivos .
```

**Ejecutar con volúmenes:**
```bash
docker run -d \
  --name api-candidatos-masivos \
  -p 3000:3000 \
  --env-file .env \
  -v uploads-data:/app/uploads \
  -v logs-data:/app/logs \
  api-candidatos-masivos
```

**Detener:**
```bash
docker stop api-candidatos-masivos
docker rm api-candidatos-masivos
```

## 💾 Gestión de Volúmenes

**Listar volúmenes:**
```bash
docker volume ls
```

**Inspeccionar volumen:**
```bash
docker volume inspect uploads-data
docker volume inspect logs-data
```

**Backup de volumen:**
```bash
# Backup de uploads
docker run --rm -v uploads-data:/data -v $(pwd):/backup alpine tar czf /backup/uploads-backup.tar.gz -C /data .

# Backup de logs
docker run --rm -v logs-data:/data -v $(pwd):/backup alpine tar czf /backup/logs-backup.tar.gz -C /data .
```

**Restaurar desde backup:**
```bash
# Restaurar uploads
docker run --rm -v uploads-data:/data -v $(pwd):/backup alpine tar xzf /backup/uploads-backup.tar.gz -C /data

# Restaurar logs
docker run --rm -v logs-data:/data -v $(pwd):/backup alpine tar xzf /backup/logs-backup.tar.gz -C /data
```

## ⚠️ Notas Importantes

1. **Los volúmenes nombrados persisten** incluso si eliminas el contenedor
2. **NO uses `docker-compose down -v`** si quieres mantener los datos
3. **Los datos se almacenan en** la máquina host en una ubicación gestionada por Docker
4. **Para actualizar la aplicación** sin perder datos:
   ```bash
   docker-compose down
   docker-compose up -d --build
   ```

## 🔄 Actualizar sin Perder Datos

```bash
# 1. Detener el contenedor (NO eliminar volúmenes)
docker-compose down

# 2. Reconstruir la imagen con cambios
docker-compose build

# 3. Iniciar con los mismos volúmenes
docker-compose up -d
```

Los archivos en `uploads/` y `logs/` se mantendrán intactos! ✅
