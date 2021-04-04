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


/* What do we have to do.

 - make a new class for employee
 - make sub class for engineer
 - make sub class for intern
 - make 
 - setup inquierer questions
 - figure out how to do conditionals with inquierer

*/