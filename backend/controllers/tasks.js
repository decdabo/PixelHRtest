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
      const task = await Task.findOne({ name }).sort('-_id');
      
      return res.status(200).json(task)
    }
  
    const tasks = await Task.find({}).sort('-_id');
    return res.status(200).json(tasks)
  } catch (error) {
    catchError(res, error);
  }
}

const postTask = async(req, res) => {
  const { name } = req.body;

  try {
    const task = new Task({ name });
    await task.save();

    return res.status(200).json({
      message: "Task created successfully",
      ...task
    });
  } catch (error) {
    catchError(res, error);
  }
}

const deleteTask = async(req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  return res.json({
    message: 'Deleted'
  })
}

const deleteAllTask = async(_, res) => {
  try {
    await Task.deleteMany({});

    return res.status(200).json({
      message: 'All tasks has been deleted!'
    })
  } catch (error) {
    catchError(res, error);
  }
}

module.exports = {
  getTasks,
  postTask,
  deleteTask,
  deleteAllTask
}
