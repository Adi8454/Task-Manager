import { useState } from 'react';

export default function TaskForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return setError('Title cannot be empty');

    try {
      setLoading(true);
      setError('');
      await onCreate(title.trim());
      setTitle('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.row}>
        <input
          style={styles.input}
          type="text"
          placeholder="Add a new task…"
          value={title}
          onChange={(e) => { setTitle(e.target.value); setError(''); }}
          disabled={loading}
        />
        <button style={styles.btn} type="submit" disabled={loading}>
          {loading ? '…' : 'Add'}
        </button>
      </div>
      {error && <p style={styles.error}>{error}</p>}
    </form>
  );
}

const styles = {
  form: { marginBottom: 20 },
  row: { display: 'flex', gap: 8 },
  input: {
    flex: 1,
    padding: '9px 12px',
    border: '1px solid #d1d5db',
    borderRadius: 8,
    fontSize: 14,
    outline: 'none',
  },
  btn: {
    padding: '9px 18px',
    background: '#4f46e5',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
  },
  error: { color: '#b91c1c', fontSize: 13, marginTop: 6 },
};