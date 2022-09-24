const { Router } = require('express');
const { postTask, getTasks, deleteTask, updateTask } = require('../controllers/tasks');
const { postTaskValidator } = require('../middlewares/task-validator');

const router = Router();

router.get('/', getTasks);
router.get('/:name', getTasks);
router.post('/', postTaskValidator, postTask);
router.post('/:name', updateTask);
router.delete('/:name', deleteTask);

module.exports = router;
