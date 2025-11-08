import Task, { ITask } from '../models/taskModel';

// Crear una nueva tarea en la base de datos
export const createTaskInDB = async (
  title: string,
  description: string,
  status: string
): Promise<ITask> => {
  const newTask = new Task({ title, description, status });
  return await newTask.save();
};

// Obtener todas las tareas desde la base de datos
export const getAllTasksFromDB = async (): Promise<ITask[]> => {
  return await Task.find();
};

// Actualizar el estado de una tarea por ID
export const updateTaskStatusInDB = async (
  id: string,
  status: string
): Promise<ITask | null> => {
  return await Task.findByIdAndUpdate(id, { status }, { new: true });
};