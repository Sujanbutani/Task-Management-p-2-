const express = require('express');
const { createTask } = require('../controllers/taskController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// Protected routes
router.post('/tasks', protect, createTask);

module.exports = router;
