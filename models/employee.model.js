'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    name: {
        type: String,
        required: 'Name of Employee cannot be blank',
        trim: true,
    },
    gender: {
        type: String,
        required: 'Gender of Employee cannot be blank',
        trim: true,
    },
    birthday: {
        type: Date,
        required: 'Birthday of Employee cannot be blank',
        default: Date.now,
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: 'Phone number of Employee cannot be blank'
    },
    idNumber: {
        type: String,
        required: 'ID number of Employee cannot be blank',
        trim: true
    },
    onBoardDate: {
        type: Date,
        required: 'On board date of Employee cannot be blank',
        default: Date.now,
        trim: true,
    },
    position: {
        type: String,
        required: 'Postion of Employee cannot be blank',
        default: '临时工',
        trim: true
    },
    badgeNumber: {
        type: String
    },
    contractNumber: {
        type: String
    },
    department: {
        type: String,
        required: 'Department of Employee cannot be blank',
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
