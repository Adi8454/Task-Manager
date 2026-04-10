import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle, onEdit, onDelete }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}