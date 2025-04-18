# Proyecto: Around the U.S. Back End

## Descripción

Este proyecto es un servidor Express que proporciona una API REST para la aplicación "Around The U.S.". Maneja las solicitudes de usuarios y tarjetas, proporcionando los endpoints necesarios para obtener información de la base de datos.

## Tecnologías

- Express.js
- Node.js
- File System para manejo de archivos JSON

## Directorios

- `/data` — Archivos JSON que almacenan los datos
- `/routes` — Archivos de enrutamiento

## Ejecutar el proyecto

`npm run start` — Para iniciar el servidor  
`npm run dev` — Para iniciar el servidor con hot reload

## Endpoints

- GET `/users` — Devuelve todos los usuarios
- GET `/users/:id` — Devuelve un usuario específico por su \_id
- GET `/cards` — Devuelve todas las tarjetas
