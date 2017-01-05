'use strict';
require('../models/employee.model.js');
const mongoose = require('../config/mongoose.config');
const EmployeeModel = mongoose.model('Employee');
const User = mongoose.model('User');
const ObjectId = require('mongoose').Types.ObjectId;


//search all employees
exports.getAll = (req,res,next) =>{
  EmployeeModel.find({},(err,doc)=>{
    if(err){
      res.send('err',err);
    }else{
      res.send({employees: doc});
    }
  })
}

//search specific employee with id
exports.getEmployeeById = (req,res,next)=>{
  const id = req.params.id;
  //search employee with id
  EmployeeModel.findById(new ObjectId(id),(err,doc)=>{
    if(err){
      res.send('err',err);
    }else{
      res.jsonp(doc);
    }
  });
}

//delete specific employee with id
exports.deleteEmployeeById = (req, res, next)=>{
  const id = req.params.id;
  //search employee with id
  EmployeeModel.findByIdAndRemove(id, (err, doc)=>{
    if(err){
      res.send('err',err);
    }else{
      console.log('successfully delete', doc);
      res.jsonp(doc);
    }
  });
}


exports.getNumberByDepartment = (req,res,next)=>{
  const name = req.params.name;
  let total;
  let tempo;
  let count;

  EmployeeModel.find({department: name}, (err,doc)=>{
    if(err){
      res.send('get number by department error',err);
    }else{
      total = doc.length;
      tempo = doc.filter((employee) => {
                  return employee.position === "临时工";
              }).length;
      count = {
        total,
        tempo
      };
      res.send({employees: count});
    }
  });
}


//search specific employee with author id
exports.getByTopic = (req,res,next)=>{
  const name = req.params.name;
  //search employee with id
  EmployeeModel.find({department: name}, (err,doc)=>{
    if(err){
      res.send('get article by id error',err);
    }else{
      res.send({employees: doc});
    }
  });
}

exports.addEmployee = (req, res) => {
  const employee = new EmployeeModel(req.body.employee);
  employee.save(function(err, data){
      if(err) console.log(err);
      else {
        console.log('successfully added', doc);
        res.jsonp(data);
      }
  });
}

exports.updateEmployeeById = (req, res) => {
  const id = req.params.id;
  EmployeeModel.findOneAndUpdate({_id: id}, req.body.employee, (err,doc) => {
    if(err){
      res.send('get article by id error',err);
    }else{
      res.send(doc);
    }
  })
}
