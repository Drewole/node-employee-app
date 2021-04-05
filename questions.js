//input - Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor
const questions = [
	{
		type: 'input',
		message: 'Give a project description.',
		name: 'description',
	},
	{
		type: 'editor',
		message: 'Installation instructions',
		name: 'install',
	},
	{
		type: 'list',
		message: 'What Type of Employee?',
		choices: ["Team Manager","Engineer","Intern"],
		name: 'employeeType',
	},
	{
		type: 'list',
		message: 'Choose License Type',
		choices: ["MIT", "APACHE", "MOZILLA PUBLIC LICENSE 2.0", "GNU GPL v2", "THE UNLICENSE" ],
		name: 'license',
	},
	{
		type: 'input',
		message: 'Contribution Guidelines',
		name: 'contribute',
	},
	{
		type: 'input',
		message: 'Usage Information',
		name: 'usage',
	},
	{
		type: 'input',
		message: 'Test Instructions',
		name: 'testInstructions',
	},
	{
		type: 'input',
		message: 'Git Username',
		name: 'github',
	},
	{
		type: 'input',
		message: 'Name',
		name: 'name',
	}
	
]

module.exports = questions;