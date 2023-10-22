// TODO: Include packages needed for this application

// Inquirer package
const inquirer = require('inquirer');

// File system module
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Please add the title of your project',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please add a description for your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please add the installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please add the usage information for your project:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please add the contribution guidelines for your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please add test instructions for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select the license your project uses?',
      choices: ['MIT', 'APACHE 2.0', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
