const Task = require('../models/Task');

// GET /tasks
const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// POST /tasks
const createTask = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const task = await Task.create({ title: title.trim() });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

// PATCH /tasks/:id
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { completed, title } = req.body;

    const updates = {};
    if (typeof completed === 'boolean') updates.completed = completed;
    if (title !== undefined) {
      if (!title.trim()) {
        return res.status(400).json({ error: 'Title cannot be empty' });
      }
      updates.title = title.trim();
    }

    const task = await Task.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!task) return res.status(404).json({ error: 'Task not found' });

    res.json(task);
  } catch (err) {
    next(err);
  }
};

// DELETE /tasks/:id
const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };