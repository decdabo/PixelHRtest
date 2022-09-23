const Task = require("../models/task");

const postTask = async (req, res) => {
  const { name, description, list } = req.body;
  if (name.length < 2)  return res.json({ message: "Please insert a name to the task" });

  const data = { name, description, list };
  try {
    const newTask = new Task({
      message: "Task created successfully",
      ...data
    });
    await newTask.save();

    return res.json(data);
  } catch (error) {
    return res.json({
      error,
      message: error.message
    })
  }
}

module.exports = {
  postTask
}
