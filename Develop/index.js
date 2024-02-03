// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of this project?',
    }
    //need to add more questions later
];

inquirer.prompt(questions)
  .then((responses) => {
    console.log('User Responses: ', responses);
    writeToFile();//need to make this function and arguments
  })
  .catch((error) => {
    console.error('An error occured:', error);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
