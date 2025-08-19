<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 # Products, Orders & Details Microservices

Microservicios desarrollados con **NestJS**, contenedores **Docker** y comunicación asíncrona mediante **NATS**, con un **API Gateway** para exponer las APIs al frontend o clientes externos. Arquitectura modular diseñada para **escalabilidad, mantenimiento y despliegue en la nube**.

---

## Tecnologías
- **Backend:** NestJS (Node.js)  
- **Mensajería:** NATS (comunicación asíncrona entre microservicios)  
- **Contenerización:** Docker  
- **API Gateway:** Exposición de endpoints REST  
- **ORM:** Prisma  
- **Base de datos:** PostgreSQL (Products & Orders & Details), MongoDB (Autenticación / Users)  
- **Autenticación:** JWT  
- **Orquestación futura:** Kubernetes  
- **Pasarela de pagos futura:** Stripe  

---

## Microservicios

### 1. Products Service
- Gestión de productos: creación, actualización, eliminación y consulta.  
- Persistencia de datos en PostgreSQL mediante Prisma.  
- Publicación de eventos para servicios dependientes (Orders y Details).  

### 2. Orders Service
- Gestión de pedidos: creación, actualización, historial y estado.  
- Recepción de eventos desde Products Service y coordinación de stock.  
- Persistencia en PostgreSQL mediante Prisma.  

### 3. Details Service
- Depende de Products Service para generar detalles de productos y pedidos.  
- Gestión de información adicional relacionada con los productos.  
- Persistencia en PostgreSQL mediante Prisma.  

### 4. Auth Service
- Gestión de usuarios y autenticación con JWT.  
- Persistencia de usuarios en MongoDB.  

---

## Características principales
- Arquitectura modular orientada a microservicios.  
- Comunicación asíncrona entre servicios mediante NATS.  
- Contenerización con Docker para pruebas y despliegue.  
- API Gateway centralizado para exponer los endpoints al frontend.  
- Buenas prácticas: separación de responsabilidades, escalabilidad y mantenimiento sencillo.  
- Preparado para integración de pasarela de pagos **Stripe** y orquestación con **Kubernetes**.  

---

## Próximos pasos
- Integrar **Stripe** para pagos en Orders Service.  
- Orquestación de microservicios con **Kubernetes**.  
- Despliegue en entorno de **producción** con alta disponibilidad y monitoreo.  

---

## Instalación y ejecución (local)
```bash
# Clonar repositorio
git clone 
cd products-orders-details-microservices

# Levantar servicios con Docker Compose
docker-compose up -d

# Ejecutar microservicios individualmente (opcional)
cd products-service && npm install && npm run start:dev
cd orders-service && npm install && npm run start:dev
cd details-service && npm install && npm run start:dev
cd auth-service && npm install && npm run start:dev

