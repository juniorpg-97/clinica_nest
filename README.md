Cuando se realiza una petición POST /citas, NestJS procesa el request siguiendo lo siguiente:

1 JwtAuthGuard / RolesGuard
Verifican que el usuario esté autenticado mediante un JWT válido y que tenga el rol necesario para realizar la operación.

2 LoggingInterceptor
Comienza a medir el tiempo que tarda en procesarse la petición.

3 ValidationPipe
Valida el cuerpo de la petición utilizando el DTO de Citas, si los datos no cumplen las reglas establecidas, la petición es rechazada.

4 CitasController => CitasService
El controlador recibe la petición y delega la operación al servicio, citasService ejecuta la lógica de negocio y realiza las comprobaciones necesarias, incluyendo la llamada a PacientesService para verificar al paciente.

5 PrismaExceptionFilter
Si prisma genera un error durante la operación, el filtro captura la excepción y la transforma en una respuesta HTTP adecuada.

6 LoggingInterceptor — final
Antes de enviar la respuesta al cliente, registra el tiempo total que tomó procesar la petición.

Mapa mental

Guards → Interceptor → Pipe → Controller → Filter → Interceptor
