// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");


// TODO: Create a function to write README file
function writeToFile(data) {
    // write readme file in dist directory
    fs.writeFile('./dist/README.md', data, err => {
        if (err) throw err;

        console.log("README.md complete!");
    });
};


// TODO: Create a function to initialize app
function init() {
    // on init, run inquirer.prompt
    inquirer
    .prompt(questions)
    // then handle response
    .then(function(answer){
        console.log(answer)
        // and write responses to Markdown file
        writeToFile(generateMarkdown(answer))
    });
}

// Function call to initialize app
init();
