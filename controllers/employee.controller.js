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

  const employee = new EmployeeModel(req.body);

  employee.save(function(err, data){
      if(err) console.log(err);
      else {
        res.jsonp(data);
        console.log("new post is added");
      }
  });
}

exports.updateEmployeeById = (req, res) => {
  const id = req.params.id;
  EmployeeModel.findOneAndUpdate({_id: id}, req.body, (err,doc) => {
    if(err){
      res.send('get article by id error',err);
    }else{
      res.send(doc);
    }
  })
}
