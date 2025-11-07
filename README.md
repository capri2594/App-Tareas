# 🧠 Proyecto: Gestor de Tareas Asistido por IA

Este proyecto implementa un sistema de gestión de tareas simple, desarrollado bajo el enfoque **Spec-driven development with AI**, utilizando GitHub Copilot como agente generativo. El código debe seguir estrictamente las especificaciones funcionales y técnicas descritas en este documento.

---

## 🎯 Objetivo

Construir una aplicación web que permita a un usuario gestionar tareas personales, con funcionalidades esenciales y una arquitectura profesional, guiada por especificaciones claras.

---

## ✅ Requerimientos Funcionales (MVP)

El sistema debe permitir al usuario:

1. **Crear una nueva tarea**  
   - Campos: título, descripción  
   - Estado inicial: `pendiente`

2. **Ver una lista de todas las tareas**  
   - Mostrar título, descripción y estado

3. **Actualizar el estado de una tarea**  
   - Estados posibles: `pendiente`, `en progreso`, `completada`

---

## ⚙️ Requerimientos No-Funcionales y Técnicos

El desarrollo asistido por IA debe reflejar los siguientes conceptos:

- **Lenguaje**:  
  - Todo el código debe estar escrito en **TypeScript**

- **Asincronía**:  
  - El backend debe implementar **Promises** y **Async/Await** para operaciones asíncronas

- **API**:  
  - Las operaciones CRUD deben seguir el diseño **RESTful**  
  - Endpoints claros y semánticos (`GET /tasks`, `POST /tasks`, etc.)

- **Arquitectura**:  
  - Patrón de diseño **MVC**  
  - Aplicar el principio de **Responsabilidad Única (SRP)** del modelo **SOLID**

- **Datos**:  
  - Arquitectura de datos simple  
  - Motor de base de datos: **SQL o NoSQL** (a elección del desarrollador)  
  - Modelo de entidad `Tarea` con campos: `id`, `título`, `descripción`, `estado`

- **Seguridad**:  
  - Incluir **placeholders** para autenticación/autorización  
  - Aplicar **buenas prácticas** en el manejo de entradas (validación, sanitización)

---

## 🧠 Rol del agente de IA

El agente de IA (GitHub Copilot) debe:

- Generar código únicamente basado en las especificaciones de este documento  
- Respetar el uso de TypeScript, Async/Await, REST, MVC y SOLID  
- No generar funciones sin una especificación previa  
- Documentar el código con comentarios explicativos

---

## 📁 Estructura sugerida del proyecto
/src /controllers     # Lógica que conecta las rutas con los servicios /models          # Definición de las entidades y estructuras de datos /routes          # Endpoints REST que exponen la API /services        # Lógica de negocio y acceso a datos /utils           # Funciones auxiliares reutilizables

---

## 🚀 Inicio rápido

1. Clonar el repositorio  
2. Instalar dependencias con `npm install`  
3. Ejecutar el servidor con `npm run dev`

---

Este documento será actualizado únicamente por el desarrollador humano. El agente de IA debe seguirlo estrictamente.