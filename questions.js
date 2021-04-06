//input - Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor
const questions = [
    {
		type: 'input',
		message: 'First Name:',
		name: 'firstName',
	},
    {
		type: 'input',
		message: 'Last Name:',
		name: 'lastName',
	},
    {
        type: 'number',
        message: 'Employee ID:',
        name: 'id',
    },
	{
		type: 'number',
		message: 'Office Number',
		name: 'officeNum',
	},
    {
        type: 'confirm',
        message: 'Would you like to add another employee?',
        name: 'addEmployee'
    },
    {
		type: 'input',
		message: 'Git Username',
		name: 'github',
	},
    {
		type: 'input',
		message: 'School',
		name: 'school',
	},
	{
		type: 'list',
		message: 'What Type of Employee?',
		choices: ["Team Manager","Engineer","Intern"],
		name: 'employeeType',
	}
	
]

//Ok, thinking this is the flow
// We get the manager data, which is its own sub class
// We then ask if we would like to add an employee, with a select type below

module.exports = questions;