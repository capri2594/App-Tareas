// src/routes/taskRoutes.ts

import { Router } from 'express';
import { createTask, getAllTasks, updateTaskStatus } from '../controllers/taskControllers';

const router = Router();

// Ruta para crear una nueva tarea
router.post('/tasks', createTask);

// Ruta para obtener todas las tareas
router.get('/tasks', getAllTasks);

// Ruta para actualizar el estado de una tarea
router.patch('/tasks/:id/status', updateTaskStatus);

export default router;