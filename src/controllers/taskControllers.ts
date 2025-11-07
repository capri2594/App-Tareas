// src/controllers/taskController.ts

import { Request, Response } from 'express';
import { createTaskInDB, getAllTasksFromDB, updateTaskStatusInDB } from '../services/taskService';

/*
Especificación funcional: Crear una nueva tarea

Objetivo:
- Implementar una función que permita crear una nueva tarea en el sistema.

Requisitos:
- La función debe estar escrita en TypeScript.
- Debe seguir el patrón MVC (ubicarse en el controlador correspondiente).
- Debe cumplir con el principio de responsabilidad única (SRP).
- Debe usar Async/Await para manejar la operación asíncrona.
- Debe recibir los siguientes datos: título (string), descripción (string).
- El estado inicial de la tarea debe ser "pendiente".
- Debe validar que el título y la descripción no estén vacíos.
- Debe guardar la tarea en la base de datos (motor SQL o NoSQL).
- Debe devolver un objeto con los datos de la tarea creada.
- Debe manejar errores y devolver una respuesta clara si la operación falla.
*/
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: 'Título y descripción son obligatorios.' });
    }

    const newTask = await createTaskInDB({
      title,
      description,
      status: 'pendiente',
    });

    return res.status(201).json(newTask);
  } catch (error) {
    console.error('Error al crear tarea:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

/*
Especificación funcional: Obtener todas las tareas

Objetivo:
- Implementar una función que devuelva una lista de todas las tareas almacenadas.

Requisitos:
- La función debe estar escrita en TypeScript.
- Debe seguir el patrón MVC y el principio de responsabilidad única (SRP).
- Debe usar Async/Await para acceder a la base de datos.
- Debe recuperar todas las tareas existentes.
- Cada tarea debe incluir: id, título, descripción y estado.
- Debe devolver un arreglo con todas las tareas.
- Debe manejar errores y devolver una respuesta clara si la operación falla.
*/
export const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await getAllTasksFromDB();
    return res.status(200).json(tasks);
  } catch (error) {
    console.error('Error al obtener tareas:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

/*
Especificación funcional: Actualizar el estado de una tarea

Objetivo:
- Implementar una función que permita actualizar el estado de una tarea existente.

Requisitos:
- La función debe estar escrita en TypeScript.
- Debe seguir el patrón MVC y el principio de responsabilidad única (SRP).
- Debe usar Async/Await para acceder a la base de datos.
- Debe recibir el ID de la tarea y el nuevo estado.
- Los estados válidos son: "pendiente", "en progreso", "completada".
- Debe validar que el estado recibido sea uno de los permitidos.
- Si la tarea no existe, debe devolver un error 404.
- Si la actualización es exitosa, debe devolver la tarea actualizada.
- Debe manejar errores y devolver una respuesta clara si la operación falla.
*/
export const updateTaskStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const validStatuses = ['pendiente', 'en progreso', 'completada'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Estado inválido.' });
    }

    const updatedTask = await updateTaskStatusInDB(id, status);

    if (!updatedTask) {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }

    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error al actualizar tarea:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};