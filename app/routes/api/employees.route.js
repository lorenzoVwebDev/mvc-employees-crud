const express = require('express');
const Router = express.Router()
const { getAllEmployees, createNewEmployee, updateEmployee } = require('../../controller/employees.controller.js')

Router.route('/')
  .get((req, res, next) => { 
    if (req.query.id === 'ALL') {
      console.log('true')
      getAllEmployees(req, res, next)
    } else {
      console.log('method in development')
    }
  })
  .post(createNewEmployee)
  .put(updateEmployee)
  .delete()

module.exports = Router