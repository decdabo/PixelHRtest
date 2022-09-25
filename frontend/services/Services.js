class TaskServices {
  constructor() {
    this.baseURL = "http://localhost:9000/api/tasks";
  }

  async getTasks(name) {
    const res = await (await fetch(`${this.baseURL}${ name ? `/${name}` : ''}`)).json();

    return res;
  }
  async deleteTask(id) {
    await fetch(`${this.baseURL}/${id ? id : ''}`, {
      method: 'DELETE'
    });
  }
  async createTask(form) {
    await fetch(this.baseURL, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(form)
    });
  }
}

export default TaskServices;
