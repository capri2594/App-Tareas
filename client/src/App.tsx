import type { Task } from './types';

import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';



function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get<Task[]>('http://localhost:3000/api/tasks');
      setTasks(response.data);
    } catch (err) {
      console.error('Error al obtener tareas:', err);
      setError('No se pudo cargar la lista de tareas.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <h1>Gestor de Tareas</h1>
      <TaskForm onTaskCreated={fetchTasks} />
      <TaskList
        tasks={tasks}
        loading={loading}
        error={error}
        onTaskDeleted={fetchTasks}
        onTaskUpdated={fetchTasks}
      />
    </div>
  );
}

export default App;