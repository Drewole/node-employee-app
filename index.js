const Inquirer = require("inquirer")
const Fs = require('fs')
const {managerQuestions,
      engineerQuestions,
      internQuestions,
      addEmployeeConfirm} = require("./questions")
const Employee = require("./lib/Employee")
// const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

var questionGathering = function(managerQuestions,engineerQuestions,internQuestions){
  return Inquirer
    .prompt(managerQuestions)
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

/* 
GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

What do we have to do.
Email needs to be mailto

 - figure out how to do conditionals with inquirer

*/

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number