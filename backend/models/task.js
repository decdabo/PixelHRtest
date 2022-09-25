const { Schema, model } = require('mongoose');

const taskSchema = Schema({
  name: {
    type: String,
    require: true
  }
});

module.exports = model('tasks', taskSchema);
