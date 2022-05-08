# README Generator

## Purpose

This README Generator application has been developed to allow developers to dynamically create a README.md file via the command line interface. Developers may clone & locally store the code, install the necessary dependencies, and run the generator with the command node index in their command line. The application will then prompt the user through a series of questions, and generate a README.md file based on the responses. 

### User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

### This application has been developed to:

1. Allow developers to generate README.md files for their repositories, so that they do not have to worry about formatting or forgetting important sections.
2. Receive user input via the command line interface and use that user data to generate a markdown file.

## Application Details
This is a command line application. There is no live deployment & users must follow the installation instructions to use the application.

The user-generated README.md file will be written to the ./dist/README.md.

### Installation
To utilize this application, clone the repo to your local computer and run an npm install to install all necessary dependencies. To invoke the application, navigate to the root in your command line and run node index.

### Code Summary
This command line application utilizes node.js & the npm inquirer package to prompt and receive user input via the command line. In index.js, the init function first calls the inquirer.prompt method on the questions array and passes the answer to generateMarkdown, which in turn is passed into the writeFile function. 

The top of the generateMarkdown.js file contains functions for dealing with the license input & getting the correct formatting for the badges & links. These functions are later called within the return of generateMarkdown.

The first code block inside generateMarkdown() deals with declaring the table of contents & adding list items based on whether or not a user has chosen to write to a specific optional section (i.e. instructions or useage). These sections will appear in the markdown file regardless, but will not appear in the table of contents if they have no content. 

The remainder of the generateMarkdown function is a fairly straightforward return template literal, which makes calls to the aforementioned functions or variables when needed. 

### Technologies Used
- Javascript
- Node.js 

Dependencies: Inquirer package 
(You may also notice a markdown-toc dependency in the package.json file. This is a package for dynamically creating a table of contents, which is a developmental idea for this project and not currently in use.)

## Deployed Application

The README.md file generated in the demo videos can be viewed [here in the dist folder.](./dist/README.md)

[Link to Command Line Demo Video on Google Drive](https://drive.google.com/file/d/1CZ65YnFTMAYMUnWulxf_nuKpfZvanBVQ/view)

[Link to Secondary Video Demonstrating Matching README.md File Was Generated](https://drive.google.com/file/d/1zUuKWCJUVaZGZ9LhGqtJbTzCRZXhEoyA/view)



