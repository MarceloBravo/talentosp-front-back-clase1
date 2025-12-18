### Ejercicio práctico para aplicar los conceptos aprendidos.
🛠️ Implementación Práctica
## Crea una aplicación que demuestre comunicación completa frontend-backend:

## Configurar cliente HTTP con Axios

- [x] Crear instancia configurada con base URL
- [ ] Implementar interceptores de petición y respuesta
- [ ] Agregar manejo automático de tokens de autenticación
- [x] Implementar gestión de estados de carga

- [ ] Crear hook personalizado para estados HTTP
- [x] Implementar loading, success y error states
- [x] Mostrar indicadores visuales durante peticiones
- [x] Configurar CORS en backend

- [x] Instalar y configurar middleware CORS
- [x] Definir orígenes permitidos y headers
- [x] Probar comunicación entre dominios
- [x] Crear formulario de contacto funcional

- [x] Implementar validación en tiempo real
- [x] Enviar datos al backend con manejo de errores
- [x] Mostrar confirmación de envío exitoso

### Ejercicio: Implementa un sistema de "like" para posts que:
- [x] actualice el contador en tiempo real, 
- [x] manejando errores de red y 
- [x] mostrando estados de carga apropiados.

## Instrucciones para ejecutar la aplicación

### Backend
1. Ingresar al directorio `backend-comunicacion`:
   ```
   cd backend-comunicacion
   ```

2. Instalar dependencias:
   ```
   npm install
   ```

3. Crear un archivo `.env` en la raíz de `backend-comunicacion` con el siguiente contenido (ajusta los valores según tu configuración):
   ```
   DB_HOST=tu_host_db
   DB_PORT=3306
   DB_USER=tu_usuario_db
   DB_PASSWORD=tu_password_db
   DB_NAME=tu_nombre_db

   EMAIL_TO=tu_email@ejemplo.com
   FRONTEND_URL=http://localhost:3001
   FRONTEND_URL2=http://192.168.1.12:3001
   ```

4. Inicializar la base de datos:
   ```
   node db\init-database.js
   ```

5. Ejecutar el servidor:
   ```
   node app.js
   ```

### Frontend
1. Ingresar al directorio `frontend-comunicacion`:
   ```
   cd frontend-comunicacion
   ```

2. Instalar dependencias:
   ```
   npm install
   ```

3. Crear un archivo `.env` en la raíz de `frontend-comunicacion` con el siguiente contenido (ajusta los valores según tu configuración):
   ```
   REACT_APP_API_URL=http://localhost:3000
   ```

4. Ejecutar la aplicación:
   ```
   npm start
   ```

Nota: Asegúrate de que el backend esté ejecutándose antes de iniciar el frontend. El frontend se ejecutará en `http://localhost:3001` por defecto.

