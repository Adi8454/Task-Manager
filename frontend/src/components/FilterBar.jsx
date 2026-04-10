export default function FilterBar({ filter, onChange, counts }) {
  const filters = ['all', 'active', 'completed'];
  return (
    <div style={styles.bar}>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          style={{ ...styles.btn, ...(filter === f ? styles.active : {}) }}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)} ({counts[f]})
        </button>
      ))}
    </div>
  );
}

const styles = {
  bar: { display: 'flex', gap: 6, marginBottom: 16 },
  btn: {
    padding: '5px 12px',
    border: '1px solid #d1d5db',
    borderRadius: 20,
    background: 'transparent',
    fontSize: 13,
    cursor: 'pointer',
    color: '#555',
  },
  active: {
    background: '#4f46e5',
    color: '#fff',
    borderColor: '#4f46e5',
  },
};