const BASE = "http://localhost:5000/tasks";

const handleResponse = async (res) => {
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Something went wrong');
  return data;
};

export const fetchTasks = () =>
  fetch(BASE).then(handleResponse);

export const createTask = (title) =>
  fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  }).then(handleResponse);

export const updateTask = (id, updates) =>
  fetch(`${BASE}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  }).then(handleResponse);

export const deleteTask = (id) =>
  fetch(`${BASE}/${id}`, { method: 'DELETE' }).then(handleResponse);