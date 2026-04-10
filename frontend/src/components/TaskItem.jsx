import { useState } from 'react';

export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleToggle = async () => {
    try {
      setLoading(true);
      await onToggle(task._id, task.completed);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async () => {
    if (!editTitle.trim()) return setError('Title cannot be empty');
    if (editTitle.trim() === task.title) return setEditing(false);
    try {
      setLoading(true);
      await onEdit(task._id, editTitle.trim());
      setEditing(false);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await onDelete(task._id);
    } finally {
      setLoading(false);
    }
  };

  return (
    <li style={{ ...styles.item, opacity: loading ? 0.6 : 1 }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        disabled={loading}
        style={styles.checkbox}
      />

      {editing ? (
        <div style={{ flex: 1 }}>
          <input
            style={styles.editInput}
            value={editTitle}
            onChange={(e) => { setEditTitle(e.target.value); setError(''); }}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleEdit();
              if (e.key === 'Escape') { setEditing(false); setEditTitle(task.title); }
            }}
          />
          {error && <p style={styles.error}>{error}</p>}
          <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
            <button style={styles.saveBtn} onClick={handleEdit} disabled={loading}>Save</button>
            <button style={styles.cancelBtn} onClick={() => { setEditing(false); setEditTitle(task.title); }}>Cancel</button>
          </div>
        </div>
      ) : (
        <span
          style={{
            ...styles.title,
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? '#9ca3af' : '#111',
          }}
          onDoubleClick={() => setEditing(true)}
          title="Double-click to edit"
        >
          {task.title}
        </span>
      )}

      {!editing && (
        <div style={styles.actions}>
          <button style={styles.editBtn} onClick={() => setEditing(true)} disabled={loading}>Edit</button>
          <button style={styles.deleteBtn} onClick={handleDelete} disabled={loading}>Delete</button>
        </div>
      )}
    </li>
  );
}

const styles = {
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    padding: '12px 0',
    borderBottom: '1px solid #f3f4f6',
    transition: 'opacity 0.15s',
  },
  checkbox: { marginTop: 3, accentColor: '#4f46e5', width: 16, height: 16, cursor: 'pointer' },
  title: { flex: 1, fontSize: 14, lineHeight: 1.5, cursor: 'default' },
  editInput: {
    width: '100%',
    padding: '6px 10px',
    border: '1px solid #4f46e5',
    borderRadius: 6,
    fontSize: 14,
    outline: 'none',
  },
  actions: { display: 'flex', gap: 6, flexShrink: 0 },
  editBtn: {
    padding: '4px 10px', fontSize: 12, border: '1px solid #d1d5db',
    borderRadius: 6, background: 'transparent', cursor: 'pointer', color: '#555',
  },
  deleteBtn: {
    padding: '4px 10px', fontSize: 12, border: '1px solid #fecaca',
    borderRadius: 6, background: 'transparent', cursor: 'pointer', color: '#b91c1c',
  },
  saveBtn: {
    padding: '4px 12px', fontSize: 12, background: '#4f46e5',
    color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer',
  },
  cancelBtn: {
    padding: '4px 12px', fontSize: 12, background: 'transparent',
    border: '1px solid #d1d5db', borderRadius: 6, cursor: 'pointer', color: '#555',
  },
  error: { color: '#b91c1c', fontSize: 12, marginTop: 4 },
};