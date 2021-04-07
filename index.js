const Inquirer = require("inquirer")
const Fs = require('fs')
const {managerQuestions,
      engineerQuestions,
      internQuestions,
      addEmployeeConfirm} = require("./questions")
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

var questionGathering = function(questions){
  return Inquirer
    .prompt(questions)
    .then(function(answers){
      console.log(answers)
        // if (answers.officeNum === true){
        //   //loop back to third prompt again
          
        // }else{
        //   //ask 1st prompt
        //   return questionGathering('questions 1');
        // }
    })
}
questionGathering(managerQuestions)
