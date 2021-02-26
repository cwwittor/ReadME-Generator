// Including the packages needed for the project
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// Prompts the user questions which will be used
inquirer.prompt([
        {
            type: "input",
            message: "What is the title of the project?",
            name: "title"
        },
        {
            type: "input",
            message: "What does the project do?",
            name: "description"
        },
        {
            type: "input",
            message: "How is the project installed?",
            name: "installation"
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "How would I use the application?",
            name: "usage"
        },
        {
            type: "input",
            message: "What did you learn or find interesting with the project?",
            name: "interesting"
        },
        {
            type: "input",
            message: "How would you test/run this application?",
            name: "test"
        },
        {
            type: "list",
            message: "What license do you need for this project?",
            name: "license",
            choices: ["Apache", "GNU", "MIT", "none"]
        }
    ]).then((data) => {
        //writes the file using the markdown js
        const markdown = generateMarkdown(data);
        fs.writeFile("README.md", markdown, err => {
            if(err) {
                throw err;
            }
        });
    });
