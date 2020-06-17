var express = require('express');
var router = express.Router();
var Employee = require('./model');
//for all employee details
router.get('/', function(req, res){
     Employee.getEmployees(function(err,employees){
         if(err) throw err;
         res.json(employees);
     });
 })
//adding employee
router.post('/', function(req, res){
    var newEmployee = {
        name: req.body.name,
        position : req.body.position,
        department : req.body.department,
        salary: req.body.salary
    }
     Employee.addEmployee(newEmployee,function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
//editing details of employee
 router.put('/:_id', function(req, res){
     var update = {
        name: req.body.name,
        position : req.body.position,
        department : req.body.department,
        salary: req.body.salary
    }
     Employee.updateEmployee(req.params._id , update, function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
 router.delete('/:_id', function(req, res){
     
     Employee.deleteEmployee(req.params._id ,  function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
 router.get('/:_id', function(req, res){
    
     Employee.getEmployee(req.params._id , function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
module.exports = router;