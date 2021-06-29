const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { generateMarkdown } = require('./utils/generateMarkdown')
const writeFile = util.promisify(fs.writeFile);

let employees = [];

async function addEmployee() {
    const response = await inquirer.prompt({
      type: "list",
      message: "Would you like to add another Employee?",
      name: "employeeType",
      choices: ["Engineer", "Intern", "No"],
    });

    if (response.employeeType === "Engineer") {
        await addEngineerQuestions().then((response) => {
          const engineer = new Engineer(response);
          employees.push(engineer);
        });
    } else if (response.employeeType === "Intern") {
        await addInternQuestions().then((response) => {
            const intern = new Intern(response);
            employees.push(intern);
        });
    } else {
        return;
    }

    await addEmployee();
}

async function addManagerQuestions() {
    const response = await inquirer.prompt([
      {
        type: "input",
        message: "Enter team manager's name:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter team manager's employee ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter team manager's email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Enter team manager's office number:",
        name: "officeNumber",
      },
    ]);
    const manager = new Manager(response);
    employees.push(manager);
}

async function addEngineerQuestions() {
    const response = await inquirer.prompt([
      {
        type: "input",
        message: "Enter engineer's name:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter engineer's employee ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter engineer's email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Enter engineer's gitHub username:",
        name: "github",
      },
    ]);
    return response;
}

async function addInternQuestions() {
    const response = await inquirer.prompt([
      {
        type: "input",
        message: "Enter intern's name:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter intern's employee ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter intern's email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Enter intern's school:",
        name: "school",
      },
    ]);
    return response;
}


async function init() {
  await addManagerQuestions();
  await addEmployee();
  writeFile("dist/index.html", generateMarkdown(employees));
}

init();
