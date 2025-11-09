// src/routes/taskRoutes.ts
import express from 'express';

import { createTask, getAllTasks, updateTaskStatus, deleteTask } from '../controllers/taskControllers';

const router = express.Router();

// Ruta para crear una nueva tarea
router.post('/tasks', createTask);

// Ruta para obtener todas las tareas
router.get('/tasks', getAllTasks);

// Ruta para actualizar el estado de una tarea
router.patch('/tasks/:id/status', updateTaskStatus);

// Ruta para eliminar una tarea
router.delete('/tasks/:id', deleteTask);

export default router;