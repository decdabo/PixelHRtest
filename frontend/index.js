import './syles/styles.css';
import Ui from './ui';

const createTaskForm = document.getElementById('create-task-form');
let taskIds = [];

// Task render  
document.addEventListener('DOMContentLoaded', async () => {
  const ui = new Ui();
  await ui.renderTasks();
});

// Form  logic 
createTaskForm.addEventListener('submit', async(e) => {
  e.preventDefault()
  const ui = new Ui();
  const name = createTaskForm['name'].value;

  const form = new FormData();
  form.append("name", name);
  
  await ui.createTask({ name });
  createTaskForm['name'].value = '';
})

// Delete buttons 
document.getElementById('delete-all').addEventListener('click', async() => {
  const ui = new Ui();

  await ui.deleteAllTasks();
})

document.getElementById('delete-markeds').addEventListener('click', async() => {
  const ui = new Ui();
  if (taskIds.length) {
    return taskIds.forEach( async (id) => {
      await ui.deleteTask(id);
    })
  }

  return alert('No tasks marked')
})

// Task buttons 
document.getElementById('root').addEventListener('click', async (e) => {
  switch (e.target.name) {
    case 'checkbox':
      if (e.target.checked) {
        taskIds.push(e.target.value);
      } else {
        taskIds = taskIds.filter( id => id != e.target.value );
      }
      break;
    case 'delete-button': 
      const ui = new Ui();

      await ui.deleteTask(e.target.value);
      break;
    default:
      break;
  }
});
