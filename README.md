[README_FRONTEND.md](https://github.com/user-attachments/files/24083237/README_FRONTEND.md)
# Todo App Frontend

Este es el frontend de la aplicación Todo App, una aplicación de gestión de tareas con funcionalidades completas de creación, edición, eliminación y filtrado de tareas. La interfaz está desarrollada en React y consume un backend construido en FastAPI.

## Características

- Crear nuevas tareas
- Editar tareas existentes
- Eliminar tareas
- Panel de notas con editor Markdown

## Tecnologías utilizadas

- React 18
- Vite
- JavaScript
- CSS
- Axios para las peticiones HTTP
- React Router para navegación
- Editor Markdown personalizado

## Estructura del proyecto

```
src/
 ├── assets/
 ├── components/      Componentes reutilizables
 ├── pages/           Vistas principales
 ├── css/          Archivos CSS globales
 ├── utils/ 
 └── main.jsx         Punto de entrada
```

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- Node.js 18 o superior
- npm o yarn

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/CarlosMartinezTrillos/Todo-list-front.git
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un archivo `.env` con la URL de tu backend:
   ```
   VITE_API_URL=http://localhost:8000
   ```

## Ejecutar en modo desarrollo

```
npm run dev
```

La aplicación quedará disponible en:

```
http://localhost:5173
```

## Construcción para producción

```
npm run build
```

Esto generará la carpeta `dist`, lista para desplegar en Netlify.


Este proyecto se distribuye bajo la licencia MIT.
