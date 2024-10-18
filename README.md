# Proyecto de Landing Page - Next.js

Este es un minisite funcional desarrollado con Next.js para la recolección de datos de clientes actuales de una compañía

## Características

- Registro de usuario con los siguientes campos:
  - Nombre (obligatorio)
  - Apellido (obligatorio)
  - Cédula (obligatorio)
  - Departamento (obligatorio)
  - Ciudad (obligatorio, dependiente del departamento)
  - Celular (obligatorio)
  - Correo Electrónico (obligatorio)
  - Campo de Habeas Data (obligatorio)
- Generación de un código alfanumérico al completar el registro.
- Visualizaciones para el formulario de captura de datos y el registro completado.

## Capturas de Pantalla

### Formulario de Registro - Vista Desktop

![Formulario de Registro - Desktop](./public/images/register_desktop.png)

### Formulario de Registro - Vista Mobile

![Formulario de Registro - Mobile](./public/images/register_mobile.png)

### Registro Completado - Vista Desktop

![Registro Completado - Desktop](./public/images/confirm_desktop.png)

### Registro Completado - Vista Mobile

![Registro Completado - Mobile](./public/images/confirm_mobile.png)

## Requisitos

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [Docker](https://www.docker.com/) (opcional, pero recomendado para facilitar el despliegue)

## Instalación

### Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

### Instalación de dependencias

```bash
npm install
```

## Ejecución local

Para ejecutar el proyecto en tu máquina local, utiliza el siguiente comando:

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:3000`.

## Docker

Para ejecutar el proyecto utilizando Docker, sigue estos pasos:

### 1. Instalar Docker

Asegúrate de que Docker esté instalado en tu sistema. Si no lo tienes, puedes seguir las [instrucciones de instalación de Docker](https://docs.docker.com/get-docker/) para tu sistema operativo.

### 2. Construir y ejecutar el contenedor

Con Docker instalado, ejecuta el siguiente comando en el directorio raíz del proyecto:

```bash
docker-compose up --build
```

Este comando construirá la imagen del contenedor y lo ejecutará. El proyecto estará disponible en `http://localhost:3000`.

### 3. Detener el contenedor

Para detener el contenedor, presiona `Ctrl + C` en la terminal donde está ejecutándose Docker.


## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo `LICENSE`.
