let data = ""
// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [ {
    name: 'title',
    message: 'What is your project title?',
  },
  {
    name: 'description',
    message: 'What is your project description?',
  },
  {
    name: 'table of contents',
    message: 'What is your table of contents?',
  },
  {
    name: 'installation',
    message: 'What is your installation?',
  },
  {
    name: 'usage',
    message: 'What is your usage?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is your license?',
    choices: [
    'MIT License',
    'Apache License 2.0',
    'BSD 2-Clause Simplified License',
    'Boost Software License 1.0'
    ],
  },
  {
    name: 'github_username',
    message: 'What is your github username?',
  },
  {
    name: 'email',
    message: 'What is your email address?',
  },
  {
    name: 'contributing',
    message: 'What are you contributing?',
  },
  {
    name: 'tests',
    message: 'What is your tests?',
  }
];

// TODO: Create a function to write README file
const writeToFile = data => {
  fs.writeFile('README.md', data, err => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the README has been created
    } else {
      console.log("Your README has been successfully created!")
    }
  })
};

// TODO: Create a function to initialize app
function init() {

    inquirer
    .prompt(questions)
    .then(answers => {
      return generateMarkdown(answers);
    }).then(file =>{
      console.info('info', file)
      return writeToFile(file);
    }).catch(err => {
      console.log(err)
    })
}

// Function call to initialize app
init();
