// Include required packages;

// Inquirer
const inquirer = require('inquirer');
// File System
const fs = require('fs');
// Node.js | Path
const path = require('path');
// 


// Module Exports
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const { validate } = require('@babel/types');


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
                    console.log("You must enter an office number.");
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
            message: "Please enter the engineer's Github username."
            valide: github => {
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
    