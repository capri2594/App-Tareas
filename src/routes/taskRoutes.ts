import express from 'express';
import {
  createTask,
  getAllTasks,
  updateTaskStatus,
  deleteTask
} from '../controllers/taskControllers';

const router = express.Router();

// Ruta para crear una nueva tarea
router.post('/', createTask);

// Ruta para obtener todas las tareas
router.get('/', getAllTasks);

// Ruta para actualizar el estado de una tarea
router.patch('/:id/status', updateTaskStatus);

// Ruta para eliminar una tarea
router.delete('/:id', deleteTask);

export default router;