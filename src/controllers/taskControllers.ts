// src/controllers/taskController.ts
import mongoose from 'mongoose';

import { Request, Response } from 'express';
import { createTaskInDB, getAllTasksFromDB, updateTaskStatusInDB,deleteTaskFromDB } from '../services/taskService';
import Task from '../models/taskModel';

  

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
export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, status } = req.body;
    const newTask = await createTaskInDB(title, description, status);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la tarea' });
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
export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await getAllTasksFromDB();
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error al obtener tareas:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
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
/*
Especificación funcional: Eliminar una tarea existente

Objetivo:
- Implementar una función que permita eliminar una tarea del sistema mediante su ID.

Requisitos:
- La función debe estar escrita en TypeScript.
- Debe seguir el patrón MVC (ubicarse en el controlador correspondiente).
- Debe cumplir con el principio de responsabilidad única (SRP).
- Debe usar Async/Await para manejar la operación asíncrona.
- Debe recibir el ID de la tarea como parámetro en la URL.
- Debe validar que el ID tenga el formato correcto (ObjectId de MongoDB).
- Debe verificar si la tarea existe antes de intentar eliminarla.
- Si la tarea no existe, debe devolver un error 404.
- Si la eliminación es exitosa, debe devolver una respuesta 204 (sin contenido).
- Debe manejar errores y devolver una respuesta clara si la operación falla.
*/
export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const deleted = await deleteTaskFromDB(id);
    if (!deleted) {
      console.log('⚠️ Tarea no encontrada:', id);
      res.status(404).json({ message: 'Tarea no encontrada.' });
      return;
    }

    console.log('✅ Tarea eliminada: ', id);
    res.status(204).send();
  } catch (error: any) {
    console.error('❌ Error al eliminar tarea: ', error.message);
    res.status(500).json({ message: 'Error al eliminar la tarea.' });
  }
};

