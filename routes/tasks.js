// Dependencies
const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks');

// Routes
router.route('/')
  .get(getAllTasks)
  .post(createTask);

router.route('/:id')
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteTask);

// Export module
module.exports = router;
