import { useState, useEffect, useCallback } from 'react';
import * as api from './api/tasks';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // all | active | completed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const data = await api.fetchTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadTasks(); }, [loadTasks]);

  const handleCreate = async (title) => {
    const task = await api.createTask(title);
    setTasks((prev) => [task, ...prev]);
  };

  const handleToggle = async (id, completed) => {
    const updated = await api.updateTask(id, { completed: !completed });
    setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
  };

  const handleEdit = async (id, title) => {
    const updated = await api.updateTask(id, { title });
    setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
  };

  const handleDelete = async (id) => {
    await api.deleteTask(id);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  const filtered = tasks.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Task Manager</h1>

        <TaskForm onCreate={handleCreate} />

        {error && <div style={styles.error}>{error}</div>}

        <FilterBar filter={filter} onChange={setFilter} counts={{
          all: tasks.length,
          active: tasks.filter(t => !t.completed).length,
          completed: tasks.filter(t => t.completed).length,
        }} />

        {loading ? (
          <p style={styles.muted}>Loading tasks…</p>
        ) : filtered.length === 0 ? (
          <p style={styles.muted}>No tasks here.</p>
        ) : (
          <TaskList
            tasks={filtered}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 16px',
    fontFamily: 'system-ui, sans-serif',
  },
  card: {
    background: '#fff',
    borderRadius: 12,
    padding: '32px 28px',
    width: '100%',
    maxWidth: 560,
    boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
    height: 'fit-content',
  },
  heading: { fontSize: 24, fontWeight: 600, marginBottom: 24, color: '#111' },
  error: {
    background: '#fef2f2',
    color: '#b91c1c',
    border: '1px solid #fecaca',
    borderRadius: 8,
    padding: '10px 14px',
    marginBottom: 16,
    fontSize: 14,
  },
  muted: { color: '#888', textAlign: 'center', padding: '24px 0', fontSize: 14 },
};