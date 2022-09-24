const Task = require("../models/task");

const catchError = (res, error) => {
  return res.status(400).json({
    error,
    message: error.message
  })
}

const getTasks = async(req, res) => {
  const { name } = req.params;
  try {
    if (name) {
      const task = await Task.findOne({ name });
      return res.status(200).json({
        message: '',
        task
      })
    }
  
    const tasks = await Task.find({});
    return res.status(200).json({
      message: '',
      tasks
    })
  } catch (error) {
    catchError(res, error);
  }
}

const postTask = async(req, res) => {
  const { name, description, list } = req.body;

  if (name.length < 2) {
    return res.status(400).json({ error: true, message: "Please insert a name to the task" });
  }

  const data = { name, description, list };
  try {
    const task = new Task(data);
    await task.save();

    return res.status(200).json({
      message: "Task created successfully",
      ...data
    });
  } catch (error) {
    catchError(res, error);
  }
}

const updateTask = async(req, res) => {
  const { description, list } = req.body;
  const { name } = req.params;
  try {
    const task = await Task.findOne({ name });
    task.description = description;
    task.list = list;
    await task.save();

    return res.status(200).json({
      message: 'Task updated successfully!',
      task
    })
  } catch (error) {
    catchError(res, error);
  }
}

const deleteTask = async(req, res) => {
  const { name } = req.params;
  try {
   const task = await Task.deleteOne({ name });

    if (!task.deletedCount) {
      return res.status(400).json({
        error: true,
        message: "A task with that <<name>> not exists"
      })
    }
    return res.status(200).json({
      message: 'Deleted successfully',
      task
    })
  } catch (error) {
    catchError(res, error);
  }
}

module.exports = {
  getTasks,
  postTask,
  updateTask,
  deleteTask
}
