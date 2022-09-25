import './syles/styles.css';
import Ui from './ui';

const createTaskForm = document.getElementById('create-task-form');
let taskIds = [];

document.addEventListener('DOMContentLoaded', async () => {
  const ui = new Ui();
  await ui.renderTasks();
});

createTaskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const ui = new Ui();
  const name = createTaskForm['name'].value;

  const form = new FormData();
  form.append("name", name);
  
  ui.createTask({ name });
})


document.getElementById('root').addEventListener('click', (e) => {
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
      ui.deleteTask(e.target.value);

      break;
    default:
      break;
  }
});
