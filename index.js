// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) throw err;

        console.log("README.md complete!");
    });
};


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(answer){
        console.log(answer)
        writeToFile(generateMarkdown(answer))
    });
}

// Function call to initialize app
init();
