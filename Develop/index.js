const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of this project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can users run tests for your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'GNU GPL v3', 'Apache License 2.0', 'ISC', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

//writes data to a file within the file path, creating the file if it doesn't exist, then logs to terminal
function writeToFile(fileName, data) {
  const filePath = `./Develop/output/${fileName}`;
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Failed to write file:', err);
    } else {
      console.log(`${fileName} was successfully created in the output directory.`);
    }
  });
}

//initializes the application 
function init() {
  inquirer.prompt(questions)
    .then((responses) => {
      const markdownContent = generateMarkdown(responses);
      writeToFile('README.md', markdownContent);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();
