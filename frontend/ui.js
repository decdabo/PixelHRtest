import TaskServices from "./services/Services";

const services = new TaskServices();
class Ui {
  async renderTasks() {
    const tasks = await services.getTasks();
    const root = document.getElementById('root');
    root.innerHTML = '';
    
    if (tasks.length === 0) {
      const child = document.createElement('div');
      child.innerHTML = `
        <span>No tasks here...</span>
        <h2>Create one!</h2>
      `;

      return root.appendChild(child)
    }

    tasks.forEach( task => {
      const taskItem = document.createElement('div');
      taskItem.className = 'row p-4 task-box';
      taskItem.innerHTML = `
        <label class="col-8">${task.name}</label>
        <div class="col-2 d-flex align-items-center justify-content-center">
          <input type="checkbox" name="checkbox" value="${task._id}">
        </div>
        <div class="col-2 d-flex align-items-center justify-content-center">
          <button type="button" name="delete-button" value="${task._id}" class="btn btn-danger">X</button>
        </div>
      `;
      root.appendChild(taskItem);
    });
  }

  async createTask(formData) {
    await services.createTask(formData);

    this.renderTasks()
  }

  async deleteTask(id) {
    await services.deleteTask(id)

    await this.renderTasks();
  }
  async deleteAllTasks() {
    await services.deleteTask();
    
    await this.renderTasks();
  }
}

export default Ui;
