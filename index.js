// TODO: Include packages needed for this application
const inquirer = require("inquirer");

inquirer.prompt([
    {
        name: 'Title',
        message: 'What is your project title?',
        type: 'input'
    },
    {
        name: 'Description',
        message: 'Please enter a project description:',
        type: 'input'
    },
    {
        name: 'Instructions',
        message: 'What are the installation instructions?',
        type: 'input'
    },
    {
        name: 'Useage',
        message: 'What is the useage information?',
        type: 'input'
    },
    {
        name: 'Contribution',
        message: 'What are the contribution guidelines?',
        type: 'input'
    },
    {
        name: 'Test',
        message: 'What are the testing instructions?',
        type: 'input'
    }
])
.then(function(answer){
    console.log(answer);
});


// // TODO: Create an array of questions for user input
// const questions = [
//     {
//         name: 'Project Title',
//         message: 'What is your project title?',
//         type: 'input'
//     },
//     {
//         name: 'Description',
//         message: 'Please enter a project description:',
//         type: 'input'
//     },
//     {
//         name: 'Instructions',
//         message: 'What are the installation instructions?',
//         type: 'input'
//     },
//     {
//         name: 'Useage',
//         message: 'What is the useage information?',
//         type: 'input'
//     },
//     {
//         name: 'Contribution Guidelines',
//         message: 'What are the contribution guidelines?',
//         type: 'input'
//     },
//     {
//         name: 'Test',
//         message: 'What are the testing instructions?',
//         type: 'input'
//     }
// ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
