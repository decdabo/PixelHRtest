const { Router } = require('express');
const { postTask } = require('../controllers/tasks');
const { postTaskValidator } = require('../middlewares/task-validator');

const router = Router();

router.get('/');
router.post('/', postTaskValidator, postTask)

module.exports = router;
