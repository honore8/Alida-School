const express = require('express');
const studentController = require('../controllers/StudentController');

const router = express.Router();

router.get('/new-student', studentController.studentAdd);
router.post('/new-student', studentController.studentSave);
router.get('/students', studentController.studentList);

module.exports = router;