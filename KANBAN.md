# 🧩 Kanban - Gestor de Tareas Asistido por IA

Este archivo documenta el flujo de trabajo ágil del proyecto, simulando una metodología Kanban mediante commits diarios.

---

## 🟢 Por hacer

- Agregar badges de color para el estado (`pendiente`, `en progreso`, `completada`)
- Implementar confirmación visual antes de eliminar una tarea
- Documentar `taskService.ts` con especificaciones funcionales
- Agregar validación de campos vacíos en el formulario de creación

---

## 🟡 En progreso

- Refinamiento visual del frontend con Bootstrap
- Preparación de presentación técnica y defensa

---

## ✅ Hecho

### 📅 Jueves
- `feat: crear controlador createTask con validación`
- `docs: agregar especificación funcional en createTask`
- `chore: conectar ruta POST /tasks en taskRoutes.ts`

### 📅 Viernes
- `feat: controlador updateTaskStatus con validación de estados`
- `docs: agregar especificación funcional en updateTaskStatus`
- `chore: conectar ruta PUT /tasks/:id en taskRoutes.ts`

### 📅 Sábado
- `fix: reconexión de rutas DELETE y reinicio de servicios`
- `feat: controlador deleteTask con validación de ObjectId`
- `docs: agregar especificación funcional en deleteTask`
- `ui: agregar columna de número incremental en TaskList.tsx`

---

Este archivo se actualizará conforme se completen nuevas tareas. Cada commit representa una tarjeta movida a “Hecho” en el flujo Kanban.