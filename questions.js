const employeeQuestions = [
    {
        name: 'title',
        message: 'What kind of employee would you like to add?',
        type: 'list',
        choices: ['Manager', 'Employee', 'Intern']
    },
    {
        name: 'name',
        message: 'what is your name?',
        type: 'input'
    },
    {
        name: 'id',
        message: 'what is your employee ID?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'what is your email?',
        type: 'input'
    },
    {
        name: 'username',
        message: 'what is your GitHub username?',
        type: 'input'
    },
    {
        name: 'officeNum',
        message: 'what is your Office Nimber?',
        type: 'input'
    },
    {
        name: 'anotherEmployee',
        message: 'Would you like to add another employee?',
        type: 'list',
        choices: ['Yes', 'No']
    }
]
module.exports = {
    employeeQuestions
}