// src/services/taskService.ts

type Task = {
  id: string;
  title: string;
  description: string;
  status: 'pendiente' | 'en progreso' | 'completada';
};

const tasks: Task[] = [];

export const createTaskInDB = async (data: {
  title: string;
  description: string;
  status: 'pendiente';
}): Promise<Task> => {
  const newTask: Task = {
    id: crypto.randomUUID(),
    title: data.title,
    description: data.description,
    status: data.status,
  };
  tasks.push(newTask);
  return newTask;
};

export const getAllTasksFromDB = async (): Promise<Task[]> => {
  return tasks;
};

export const updateTaskStatusInDB = async (
  id: string,
  status: Task['status']
): Promise<Task | null> => {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;
  task.status = status;
  return task;
};