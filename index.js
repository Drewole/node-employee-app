const Inquirer = require("inquirer")

const htmlTop = `<!DOCTYPE html>
<html lang="en">
     <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <!-- ￼Import Google Fonts  -->
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;800&display=swap" rel="stylesheet" />

          <!--Import Google Icon Font-->
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <!--Import materialize.css-->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css" integrity="sha512-17AHGe9uFHHt+QaRYieK7bTdMMHBMi8PeWG99Mf/xEcfBLDCn0Gze8Xcx1KoSZxDnv+KnCC+os/vuQ7jrF/nkw==" crossorigin="anonymous" />
          <title>Team Info Dashboard</title>

          <style>
               :root {
                    --font-family: "Poppins", sans-serif;
               }
               * {
                    box-sizing: border-box;
                    font-family: var(--font-family);
               }
               h1 {
                    color: #1a237e;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                    font-weight: 800;
                    font-size: 32px;
                    text-transform: uppercase;
               }
               a,
               a:visited {
                    color: #673ab7;
               }
               a:hover {
                    color: #d500f9;
               }
               header {
                    padding: 30px;
               }
               .wrapper {
                    padding: 50px 4%;
               }
               .card .card-action a:not(.btn):not(.btn-large):not(.btn-floating) {
                    color: #673ab7;
               }
               .card .card-action a:not(.btn):not(.btn-large):not(.btn-floating):hover {
                    color: #d500f9;
               }
               .card .card-action:hover {
                    background-color: rgb(251, 251, 251);
               }
               .material-icons {
                    color: #4dd0e1;
               }
          </style>
     </head>
     <body>
          <header class="#1e88e5 blue darken-1@">
               <h1>My Team</h1>
          </header>
          <main class="wrapper">
	    <div class="row">`

const htmlBottom = `</div>
          </main>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js" integrity="sha512-E9vR5BfN3bwSc45BWl95328hvOcBYjMzKAKgdNM59yQXpTC4glztZyVoFJRp5qPc5A95zUZ8D5N7kEwUtJ9f6w==" crossorigin="anonymous"></script>
          <script src="index.js"></script>
     </body>
</html>`
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
     super(name,id);

}
class Engineer extends Employee {
     constructor(name,id,github) {
          this.name = name;
          this.id = id;
          this.github = github;
          this.email = this.generateEmail();
     }
     super(name,id);
}
class Intern extends Employee {
     constructor(name,id,school) {
          this.name = name;
          this.id = id;
          this.school = school;
          this.email = this.generateEmail();
     }
     super(name,id);
}