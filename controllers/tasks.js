// Dependencies
const { findByIdAndUpdate } = require('../models/Task');
const Task = require('../models/Task');

// Get All the tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Create task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// Get single task
const getSingleTask = async (req, res) => {
  try {
    const { id: taskId } = req.params; // take the id and store in taskId
    const task = await Task.find({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `No task found with id: ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// Update a task
const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const data = req.body;
    const task = await Task.findOneAndUpdate({ _id: taskId }, data, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// Delete a task
const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `No task found with id: ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ msg: `Error occurred - ${error}` });
  }
};

module.exports = {
  getAllTasks: getAllTasks,
  createTask: createTask,
  getSingleTask: getSingleTask,
  updateTask: updateTask,
  deleteTask: deleteTask,
};
