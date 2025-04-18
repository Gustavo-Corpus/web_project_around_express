# Proyecto: Around the U.S. Back End

## Descripción

Este proyecto implementa el backend para la aplicación "Around The U.S.", proporcionando una API REST que maneja las solicitudes de usuarios y tarjetas. El servidor gestiona la obtención de datos de usuarios y tarjetas a través de endpoints específicos.

## Tecnologías y Técnicas Utilizadas

- Express.js: Framework de Node.js para crear el servidor
- Node.js: Entorno de ejecución
- File System (fs): Para manejo de archivos JSON
- ESLint: Para mantener la calidad del código
- EditorConfig: Para consistencia en el estilo de código
- Hot Reload: Para desarrollo más eficiente

## Directorios

- `/data` — Almacenamiento de datos JSON
- `/routes` — Archivos de enrutamiento

## Ejecutar el proyecto

- `npm run start` — Inicia el servidor
- `npm run dev` — Inicia el servidor con hot reload

## Endpoints

- GET `/users` — Devuelve todos los usuarios
- GET `/users/:id` — Devuelve un usuario por su \_id
- GET `/cards` — Devuelve todas las tarjetas

## Estado de Respuestas

- 200 - Solicitud exitosa
- 404 - Recurso no encontrado
- 500 - Error del servidor
