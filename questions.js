
//input - Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor
const managerQuestions = [
	{
		type: 'input',
		message: 'Manager First Name:',
		name: 'firstName',
	},
    {
		type: 'input',
		message: 'Manager Last Name:',
		name: 'lastName',
	},
    {
        type: 'number',
        message: 'Employee ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email:',
        name: 'email',
    },
	{
		type: 'number',
		message: 'Office Number',
		name: 'officeNum',
	}
]
const engineerQuestions = [
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
        type: 'input',
        message: 'Email:',
        name: 'email',
    },
	{
		type: 'input',
		message: 'Github Username',
		name: 'github',
	}
]
const internQuestions = [
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
        type: 'input',
        message: 'Email:',
        name: 'email',
    },
	{
        type: 'input',
        message: 'School:',
        name: 'school',
    }
]

//Ok, thinking this is the flow
// We get the manager data, which is its own sub class
// We then ask if we would like to add an employee, with a select type below

module.exports = {
	managerQuestions: managerQuestions,
	engineerQuestions: engineerQuestions,
	internQuestions: internQuestions,
	addEmployeeConfirm: addEmployeeConfirm
}