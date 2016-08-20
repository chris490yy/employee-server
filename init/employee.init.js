'use strict';
require('../models/employee.model.js');

const mongoose = require('../config/mongoose.config');
const Employee = mongoose.model('Employee');

let employees = [
    {
      name: '朱红卫',
      gender: '女',
      birthday: new Date('06 04, 1968'),
      phoneNumber: 13709110964,
      idNumber: '4645443864486dsa486',
      onBoardDate: new Date('05 23, 2007'),
      position: '总经理',
      badgeNumber: 'LH0001',
      department: '总经办'
    },
    {
      name: '史娜',
      gender: '女',
      birthday: new Date('06 04, 1988'),
      phoneNumber: 13527832540964,
      idNumber: '4645gfdsfff864486dsa486',
      onBoardDate: new Date('05 23, 2012'),
      position: '总经理助理',
      badgeNumber: 'LH0234',
      department: '总经办'
    },
    {
      name: '路人甲',
      gender: '男',
      birthday: new Date('06 04, 1970'),
      phoneNumber: 13219110964,
      idNumber: '435566d443864486dsa486',
      onBoardDate: new Date('05 23, 2011'),
      position: '保安',
      badgeNumber: 'LH0001',
      department: '保安部'
    },
    {
      name: '路人乙',
      gender: '女',
      birthday: new Date('06 04, 1985'),
      phoneNumber: 13709110964,
      idNumber: '4645443864486dsa486',
      onBoardDate: new Date('05 23, 2007'),
      position: '临时工',
      badgeNumber: 'LH0001',
      department: '客房部'
    }
];

function init(){
  Employee.find({},(err,data)=>{
    if(err){
      console.log(err);
    } else{
      if(data.length === 0){
        console.log('start to initialize employee table');
        employees.map((employee)=>{
          const newEmployee = new Employee(employee);
          newEmployee.save((err,doc)=>{
            if(err){
              console.log(err);
            } else {
              console.log('insert data into employee table success');
            }
          })
        })
      }
    }
  })
};

module.exports = init;


