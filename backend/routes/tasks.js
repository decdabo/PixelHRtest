const { Router } = require('express');
const { postTask, getTasks, deleteTask, deleteAllTask } = require('../controllers/tasks');
const { postTaskValidator } = require('../middlewares/task-validator');

const router = Router();

router.get('/', getTasks);
router.get('/:name', getTasks);
router.post('/', postTaskValidator, postTask);
router.delete('/:id', deleteTask);
router.delete('/', deleteAllTask);

module.exports = router;
