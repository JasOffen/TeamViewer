const inquirer = require('inquirer');
const { employeeQuestions } = require('./questions.js');
const Employee = require('./employee.js');
const HTML = require('./htmlTemp.js')

const employeeObj = []

let questions = async () => {
    let response = await inquirer.prompt(employeeQuestions)
    let newestEmployee = new Employee(response);
    employeeObj.push(newestEmployee);
    if (response.anotherEmployee == 'Yes') {
        questions();
    } else {
        //let GenerateHTML = new HTML(employeeObj);
        HTML.splitRoles(employeeObj);
    }
}
questions();