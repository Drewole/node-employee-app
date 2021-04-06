const Inquirer = require("inquirer")
const Fs = require('fs')
const Questions = require("./questions")

var prompt = function(questions){
  Inquirer
    .prompt(questions)
    .then(function(answers){
        if (answers.addEmployee === true){
          //loop back to third prompt again
          return prompt('questions 0 data');
        }else{
          //ask 1st prompt
          return prompt('questions 1 data');
        }
    });
}
prompt(Questions)

// Async
let item = "1";
While (item !== "done") {
  If (question == "1") {
    Let answer = await inquirer(q1);
    question = (answer == 'yay') ? "2" : "1";
  } else if (question == "2") {
    Let answer = await inquirer(q2);
    If (answer == 'farts') { 
      question = "done";
    } else if (answer == 'dog') {
      question = "1";
    } else {
      question = "2";
    }
  }
}
