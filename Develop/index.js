// Inquirer package
const inquirer = require('inquirer');

// File system module
const fs = require('fs');

// GenerateMarkdown Function
const generateMarkdown = require('./utils/generateMarkdown');

// Question array used for inquerer to prompt desired user inputs. (Each object represents a new question)
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


// Function to write date to README.md file. 
// If successful console will log the message. otherwise logs error
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Congratulations! Your README.md has now been created!')
    );
  }

// Function to initialize app
function init() {
    // Inquirer to prompt the user with 'questions array'
    inquirer.prompt(questions).then((answers) => {
      // using user answers to generate mardown content  
      const markdown = generateMarkdown(answers);
      // Calls writeToFile function to create README with generated markdown content
      writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();
