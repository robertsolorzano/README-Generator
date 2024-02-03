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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Failed to write file:', err);
    } else {
      console.log(`${fileName} was successfully created.`);
    }
  });
}

// TODO: Create a function to initialize app
//moved then and catch block into init function
function init() {
  inquirer.prompt(questions)
    .then((responses) => {
      //use generateMarkdown import to create markdown string
      const markdownContent = generateMarkdown(responses);
      //call writeToFile function using name and data 
      writeToFile('README.md', markdownContent);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();
