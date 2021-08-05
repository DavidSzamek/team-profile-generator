// Include required packages;

// Inquirer
const inquirer = require('inquirer');
// File System
const fs = require('fs');
// Node.js | Path
const path = require('path');
// File Directory
const fileDirectory = path.resolve(__dirname, "dist");
// File Path
const filePath = path.join(fileDirectory, "index.html");

// Module Exports
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./lib/generateMarkdown');

// Team
let teamArray = [];

// Required Questions

const questions = [
    // Name 
    {
        type: "input",
        name: "name",
        message: "What is the name of this employee?"
    },
    // Employee ID
    {
        type: "input",
        name: "id",
        message: "Please enter the ID of this employee."

    },
    // Employee Email
    {
        type: "input",
        name: "email",
        message: "Please enter the employee's email."
    },
    // Employee Role
    {
        type: "list",
        name: "role",
        message: "What is this employee's role?",
        choices: ["Manager", "Engineer", "Intern"]
    }
]

    // Details for manager
    managerDetails = [
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("You must enter the manager's office number.");
                    return false;
                }
            }
        }
    ]

    // Details for engineer
    engineerDetails = [
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's Github username.",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("You must enter a Github username.");
                    return false;
                }
            }
        }
    ]

    // Details for intern
    internDetails = [
        {
            type: "input",
            name: "school",
            message: "Please enter the school this intern is from.",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("You must enter a school name!");
                    return false;
                }
            }
        }
    ]

// Create a function to initialise the app
const init = () => {
    newEmployee();
}

// Function to create new employee

const newEmployee = async () => {
    await inquirer.prompt(questions)
        .then((response) => {
            let name = response.name;
            let id = response.id;
            let email = response.email;
            let role = response.role; 
            let officeNumber;
            let github;
            let school;

            if (role === "Manager") {
                inquirer.prompt(managerDetails).then((response) => {
                    officeNumber = response.officeNumber;
                    let employee = new Manager(name, id, email, officeNumber);
                    teamArray.push(employee);
                    addEmployee(teamArray);
                });
            } else if (role === "Engineer") {
                inquirer.prompt(engineerDetails).then((response) => {
                    github = response.github;
                    let employee = new Engineer(name, id, email, github);
                    teamArray.push(employee);
                    addEmployee(teamArray);
                });
            } else if (role === "Intern") {
                inquirer.prompt(internDetails).then((response) => {
                    school = response.school;
                    let employee = new Intern(name, id, email, school);
                    teamArray.push(employee);
                    addEmployee(teamArray);
                });
            }
        });
};

// Function to add a new employee

const addEmployee = async (array) => {
    await inquirer
    .prompt({
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add a new employee?"
    }).then(async (response) => {
        var createEmployee = response.addEmployee;
        if (await createEmployee === true) {
            newEmployee();
        } else if (await createEmployee === false) {
            if (!fs.existsSync(fileDirectory)) {
                fs.mkdirSync(fileDirectory)
            }

            fs.writeFile(filePath, generateHTML(array), (err) => {

            if (err) {
                return console.log(err);
            }

            console.log("Your team index file has been created!");
        });
        }
    })
};

// Function to call the initialise app 
init();