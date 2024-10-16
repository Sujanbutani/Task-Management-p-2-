const Task = require('../models/taskModel');

// Create a new task
exports.createTask = async (req, res) => {
  const { title, description, dueDate, userId } = req.body;

  if (!title || !dueDate || !userId) {
    return res.status(400).json({ message: 'Title, Due Date, and User ID are required' });
  }

  try {
    const task = new Task({ title, description, dueDate, userId });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error creating task", error: error.message });
  }
};
