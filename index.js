const Inquirer = require("inquirer")
const Fs = require('fs');
const Questions = require("./questions")

console.log(Questions)

var prompt = function (question) {
	return inquirer
		.prompt(question)
		.then(function (answers) {
			if (condition === true) {
				//loop back to first prompt again
				return prompt('question 1 data');
			} else {
				//ask second prompt
				return prompt('question 2 data');
			}
		});
}

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

 - make a new class for employee - Name, ID, Email
 - make sub class for team manager - Office #
 - make sub class for engineer - Github User
 - make sub class for intern - School
 - make 
 - setup inquirer questions
 - figure out how to do conditionals with inquierer

*/

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

class Employee {
     constructor (name, id) {
          this.name = name;
          this.id = id;
          this.email = email;
     }

     generateEmail (){
          this.email = `${this.name}@fakeemail.com`;
     }
}
//Classes setup
class TeamLeader extends Employee {
     constructor (name,id,officeNum) {
          this.name = name;
          this.id = id;
          this.email = this.generateEmail();
          this.officeNum = officeNum;
     }
     super(name,id)

}
class Engineer extends Employee {
     constructor(name,id,github) {
          this.name = name;
          this.id = id;
          this.github = github;
          this.email = this.generateEmail();
     }
     super(name,id)
}
class Intern extends Employee {
     constructor(name,id,school) {
          this.name = name;
          this.id = id;
          this.school = school;
          this.email = this.generateEmail();
     }
     super(name,id)
}

const drew = new Intern ("Drew",5,"St. Johns");