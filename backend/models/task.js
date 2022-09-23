const { Schema, model } = require('mongoose');

const taskSchema = Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    default: ""
  },
  list: {
    type: Array,
    default: []
  }
});

module.exports = model('tasks', taskSchema);
