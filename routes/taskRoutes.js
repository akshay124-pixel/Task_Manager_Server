const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask, getStats } = require('../controllers/taskController');
const { protect, authorize } = require('../middleware/auth');

router.route('/')
  .get(protect, getTasks)
  .post(protect, authorize('admin'), createTask);

router.get('/stats', protect, getStats);

router.route('/:id')
  .put(protect, updateTask)
  .delete(protect, authorize('admin'), deleteTask);

module.exports = router;
