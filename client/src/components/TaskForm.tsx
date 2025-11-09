import { useState } from 'react';
import axios from 'axios';
import type { Task } from '../types';

interface Props {
  onTaskCreated: () => void;
}

const TaskForm = ({ onTaskCreated }: Props) => {
  const [formData, setFormData] = useState<Omit<Task, '_id'>>({
    title: '',
    description: '',
    status: 'pendiente',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('https://app-tareas-d142.onrender.com/api/tasks', formData);
    setFormData({ title: '', description: '', status: 'pendiente' });
    onTaskCreated(); // 👈 Esto actualiza la lista
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Nueva Tarea</h2>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Título" required />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Descripción" required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="pendiente">Pendiente</option>
        <option value="completada">Completada</option>
      </select>
      <button className="btn btn-success" type="submit">Crear tarea</button>
    </form>
  );
};

export default TaskForm;