//input - Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor
const questions = [
    {
		type: 'input',
		message: 'Name',
		name: 'name',
	},
	{
		type: 'number',
		message: 'Office Number',
		name: 'officeNum',
	},
	{
		type: 'number',
		message: 'Employee ID',
		name: 'id',
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

module.exports = questions;