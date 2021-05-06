/*
============================================
; Title:  Employee.js
; Author: Conner Shockley
; Date:   5/2/2021
; Description: File for the Employee database model
;===========================================
*/

// Require statements.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema.
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true }
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);