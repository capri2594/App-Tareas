import type { Task } from '../types';
import axios from 'axios';

interface Props {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  onTaskDeleted: () => void;
  onTaskUpdated: () => void;
}

const TaskList = ({ tasks, loading, error, onTaskDeleted, onTaskUpdated }: Props) => {
  const handleDelete = async (id: string) => {
    try {
      console.log('ID de tarea:', id);
      await axios.delete(`https://app-tareas-402.onrender.com/api/tasks/${id}`);
      onTaskDeleted();
    } catch (err) {
      console.error('Error al eliminar tarea:', err);
    }
  };

  const handleToggleStatus = async (task: Task) => {
    const newStatus = task.status === 'pendiente' ? 'completada' : 'pendiente';
    try {
      await axios.patch(`https://app-tareas-402.onrender.com/api/tasks/${task._id}/status`, { status: newStatus });
      onTaskUpdated();
    } catch (err) {
      console.error('Error al actualizar estado:', err);
    }
  };

  if (loading) return <p>Cargando tareas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="table-responsive">
      <h2>Lista de Tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas registradas.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>N°</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  <span className={`badge ${task.status === 'completada' ? 'bg-success' : 'bg-warning text-dark'}`}>
                    {task.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger me-2" onClick={() => handleDelete(task._id)}>
                    🗑️ Eliminar
                  </button>
                  <button className="btn btn-sm btn-primary" onClick={() => handleToggleStatus(task)}>
                    🔄 Cambiar estado
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;