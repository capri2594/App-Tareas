# 📄 SPEC.md - Especificaciones Técnicas del Proyecto

Este documento detalla cómo el desarrollo del MVP "Gestor de Tareas Asistido por IA" integra y aplica los principios de **TypeScript**, **REST** y **SOLID**, guiando la arquitectura y funcionalidad del sistema.

---

## 🧠 Enfoque general

El proyecto fue desarrollado bajo el modelo **Spec-driven development with AI**, donde cada componente del sistema (controladores, servicios, rutas, modelos y frontend) fue generado y refinado siguiendo especificaciones funcionales claras. Se utilizó GitHub Copilot como agente generativo, y se aplicaron correcciones manuales para asegurar el cumplimiento estricto de los principios técnicos.

---

## 🟦 TypeScript

### 📌 Justificación
TypeScript fue elegido para garantizar:
- Tipado estático en todo el proyecto
- Mayor seguridad en tiempo de desarrollo
- Autocompletado y documentación implícita
- Detección temprana de errores

### 🛠️ Aplicación en el proyecto
- Todos los archivos `.ts` y `.tsx` definen tipos explícitos (`Task`, `Request`, `Response`)
- Uso de interfaces para definir la estructura de datos (`Task` en `taskModel.ts`)
- Validación de parámetros y respuestas en controladores
- Tipado en funciones asíncronas (`async (req: Request, res: Response)`)

---

## 🌐 REST

### 📌 Justificación
El diseño RESTful permite:
- Interacción clara entre frontend y backend
- Escalabilidad y mantenibilidad
- Uso estándar de métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`)

### 🛠️ Aplicación en el proyecto
- Endpoints definidos en `taskRoutes.ts`:
  - `GET /api/tasks` → obtener todas las tareas
  - `POST /api/tasks` → crear una nueva tarea
  - `PUT /api/tasks/:id` → actualizar estado
  - `DELETE /api/tasks/:id` → eliminar tarea
- Uso semántico de rutas y verbos HTTP
- Respuestas con códigos HTTP apropiados (`200`, `201`, `204`, `404`, `500`)
- Separación clara entre lógica de negocio (servicios) y exposición de API (rutas)

---

## 🧱 Principios SOLID

### 📌 Justificación
Aplicar SOLID mejora la calidad del código, facilita el mantenimiento y promueve la reutilización.

### 🛠️ Aplicación en el proyecto

#### ✅ S - Responsabilidad Única (SRP)
- Cada archivo cumple una única función:
  - `taskControllers.ts`: lógica de entrada/salida
  - `taskService.ts`: lógica de negocio
  - `taskModel.ts`: definición de entidad
  - `taskRoutes.ts`: definición de rutas

#### ✅ O - Abierto/Cerrado
- El sistema permite agregar nuevas validaciones o endpoints sin modificar los existentes
- Validación de estados (`pendiente`, `en progreso`, `completada`) puede extenderse fácilmente

#### ✅ L - Sustitución de Liskov
- Las funciones que esperan una tarea pueden operar con cualquier objeto que cumpla la interfaz `Task`

#### ✅ I - Segregación de Interfaces
- Las interfaces están diseñadas para representar solo lo necesario (`Task` no incluye métodos innecesarios)

#### ✅ D - Inversión de Dependencias
- El controlador depende de la abstracción del servicio (`taskService`) y no directamente de la base de datos

---

## 📦 Conclusión

El desarrollo del MVP integra de forma coherente los principios de **TypeScript**, **REST** y **SOLID**, asegurando una arquitectura profesional, mantenible y alineada con las mejores prácticas del desarrollo moderno. Este documento guía la generación y refinamiento del código, y sirve como base técnica para su defensa académica.
