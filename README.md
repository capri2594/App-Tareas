🧠 Proyecto: Gestor de Tareas Asistido por IA
Este proyecto implementa un sistema de gestión de tareas simple, desarrollado bajo el enfoque Spec-driven development with AI, utilizando GitHub Copilot como agente generativo. El código sigue estrictamente las especificaciones funcionales y técnicas definidas en este documento.

🎯 Objetivo
Construir una aplicación web que permita a un usuario gestionar tareas personales, con funcionalidades esenciales y una arquitectura profesional, guiada por especificaciones claras.

✅ Requerimientos Funcionales (MVP)
El sistema debe permitir al usuario:
- Crear una nueva tarea
- Campos: título, descripción
- Estado inicial: pendiente
- Ver una lista de todas las tareas
- Mostrar título, descripción y estado
- Actualizar el estado de una tarea
- Estados posibles: pendiente, en progreso, completada

⚙️ Requerimientos Técnicos y No-Funcionales
- Lenguaje: Todo el código está escrito en TypeScript
- Asincronía: Uso de Promises y Async/Await en el backend
- API RESTful: Endpoints semánticos (GET /tasks, POST /tasks, etc.)
- Arquitectura: Patrón MVC y principio de Responsabilidad Única (SRP) del modelo SOLID
- Base de datos: MongoDB (NoSQL), con modelo Tarea (id, título, descripción, estado)
- Seguridad: Placeholders para autenticación/autorización y validación de entradas

🤖 Rol del agente de IA
El agente de IA (GitHub Copilot) debe:
- Generar código únicamente basado en las especificaciones
- Respetar el uso de TypeScript, Async/Await, REST, MVC y SOLID
- No generar funciones sin especificación previa
- Documentar el código con comentarios explicativos

🛠️ Tecnologías utilizadas
- Backend: Node.js, Express, TypeScript, MongoDB, Mongoose
- Frontend: React, TypeScript, Axios, Bootstrap
- Herramientas: Git, GitHub, Postman, MongoDB Compass

📌 Descripción del proyecto
Este MVP funcional permite gestionar tareas mediante una interfaz web. El backend y frontend fueron generados con apoyo de IA y refinados manualmente para cumplir con las especificaciones técnicas del curso.

📋 Estructura del proyecto
src/
├── controllers/      # Lógica que conecta rutas con servicios
│   └── taskControllers.ts
├── services/         # Lógica de negocio y acceso a datos
│   └── taskService.ts
├── models/           # Definición de entidades
│   └── taskModel.ts
├── routes/           # Endpoints REST
│   └── taskRoutes.ts
├── frontend/         # Componentes React
│   └── TaskList.tsx
└── app.ts            # Configuración principal del servidor



🚀 Funcionalidades implementadas
Backend
- POST /api/tasks: Crear una nueva tarea con validación
- GET /api/tasks: Obtener todas las tareas
- PUT /api/tasks/:id: Actualizar el estado de una tarea
- DELETE /api/tasks/:id: Eliminar una tarea por ID
Frontend
- Tabla con número incremental por tarea
- Botón para eliminar tareas con actualización automática
- Validación de estados y manejo de errores
- Estilos profesionales con Bootstrap

🧩 Fase 3: Generación y refinamiento del software
1. Generación de código con IA
- Se utilizaron especificaciones funcionales para generar controladores, servicios y componentes React.
2. Refinamiento manual
- Corrección de errores como el 404 en DELETE
- Validación de ObjectId y ajuste de endpoints REST
- Aplicación de async/await en todas las operaciones
3. Flujo de trabajo ágil (Kanban)
- Simulación de tareas completadas mediante commits diarios:
- 1: feat: crear controlador createTask
- 2: feat: actualizar estado con validación
- 3: fix: reconexión de rutas DELETE

🚀 Cómo ejecutar el proyecto
# Instalar dependencias
npm install

# Ejecutar backend con nodemon
npm run dev

# Ejecutar frontend (si está separado)
npm start

