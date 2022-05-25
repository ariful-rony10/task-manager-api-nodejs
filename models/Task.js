const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Field cannot be blank!! - Try add something.'],
    trim: true,
    maxlength: [30, 'Not more than 30 characters! - Try to keep it short.'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Export module
module.exports = mongoose.model('Task', TaskSchema);
