'use strict';
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller.js');

router.get('/', employeeController.getAll);
router.get('/:id', employeeController.getEmployeeById);
router.get('/department/:name', employeeController.getByTopic);

router.post('/', employeeController.addEmployee);
router.delete('/:id', employeeController.deleteEmployeeById);
router.put('/:id', employeeController.updateEmployeeById);


module.exports = router

