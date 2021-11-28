const { Console } = require('console');
const fs = require('fs');
const employee = require('./employee');
const { employeeQuestions } = require('./questions');

let managers = [];
let employees = [];
let interns = [];

let finishedHTML;

const managerHTML = () => {
    return managers.map(managersMap => {
        return `<h3>${managersMap.name}</h3>
            <h4>Employee ID: ${managersMap.id}</h4>
            <h4>Office Number: ${managersMap.officeNum}</h4>
            <h4>Email: ${managersMap.email}</h4>
            <h4>GitHub: <a href="https://github.com/${managersMap.username}" target="_blank">${managersMap.username}</a></h4>`
    })
}

const employeeHTML = () => {
    return employees.map(employeesMap => {
        return `<h3>${employeesMap.name}</h3>
            <h4>Employee ID: ${employeesMap.id}</h4>
            <h4>Office Number: ${employeesMap.officeNum}</h4>
            <h4>Email: ${employeesMap.email}</h4>
            <h4>GitHub: <a href="https://github.com/${employeesMap.username}" target="_blank">${employeesMap.username}</a></h4>`
    })
}

const internHTML = () => {
    return interns.map(internsMap => {
        return `<h3>${internsMap.name}</h3>
            <h4>Employee ID: ${internsMap.id}</h4>
            <h4>Office Number: ${internsMap.officeNum}</h4>
            <h4>Email: ${internsMap.email}</h4>
            <h4>GitHub: <a href="https://github.com/${internsMap.username}" target="_blank">${internsMap.username}</a></h4>`
    })
}

const generateHTML = () => {
    finishedHTML =
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employees List</title>
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>
    <!--Header of the webpage-->
    <header>
        <h1>Employee List</h1>
    </header>
    <!--Managers Header-->
    <section id="managers">
        <div class="employeeType">
            <h2>Managers</h2>
        </div>
        <!--List of managers from the JSON generated-->
        <div id="employeeBox">
        <div class="managers">
            ${managers.length > 0 ? managerHTML() : ''}
        </div>
        </div>
    </section>
    <section id="employees">
        <div class="employeeType">
            <h2>Employees</h2>
        </div>
        <!--List of employees from the JSON generated-->
        <div id="employeeBox">
        <div class="employees">
        ${employees.length > 0 ? employeeHTML() : ''}
        </div>
        </div>
    </section>
    <section id="interns">
        <!--List of Interns from the JSON generated-->
        <div class="employeeType">
            <h2>Interns</h2>
        </div>
        <div id="employeeBox">
        <div class="interns">
        ${interns.length > 0 ? internHTML() : 0}
        </div>
        </div>
    </section>
</body>

</html>`

    fs.writeFile('./GeneratedHTML/index.html', finishedHTML, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}

module.exports = {
    splitRoles: (response => {
        for (let i = 0; i < response.length; i++) {
            if (response[i].title == 'Manager') {
                managers.push(response[i]);
            } else if (response[i].title == 'Employee') {
                employees.push(response[i]);
            } else if (response[i].title == 'Intern') {
                interns.push(response[i]);
            } else {
                console.log("There was an error");
            }
        }
        generateHTML();
    })
}