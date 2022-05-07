// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') { return ''; }

  return `![License](https://img.shields.io/badge/license-${license}-yellow.svg)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') { return ''; }

  return `[Link to ${license}](https://opensource.org/licenses/${license})`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {return ''}

  else {return `
  Application current licensed under ${renderLicenseBadge(license)} \n
  More information on this license can be found at: ${renderLicenseLink(license)}
  `;
}};

// TODO: Create a function to generate markdown for README
const generateMarkdown = function(data) {
  const space = '*Tabspace*';

  return `
  
  # ${data.title}  |   ${renderLicenseBadge(data.license)}

  # Table of Contents
  <ol>
    <li><a href=#description>Description</a></li>
    <ol>
      <li><a href=#purpose>Purpose</a></li>
      <li><a href=#user-story>User Story</a></li>
    </ol>
    <li><a href=#technical-details>Technical Details</a></li>
    <ol>
      <li><a href=#installation>Installation</a></li>
      <li><a href=#usage>Useage</a></li>
      <li><a href=#license>License</a></li>
    </ol>
    <li><a href=#contributing>Contributing</a></li>
    <li><a href=#tests>Tests</a></li>
    <li><a href=#questions>Questions</a></li>
  </ol>

  # Description \n
  ${data.description}

  ## Purpose \n
  ${data.purpose}

  ## User Story \n
  ${data.userStory}

  # Technical Details \n
  ## Built With: ${data.languages.join(', ')}

  ## Installation \n
  ${data.instructions}

  ## Useage \n
  ${data.useage}

  ## License \n
  ${renderLicenseSection(data.license)}

  ## Contributing \n
  ${data.contributions}

  ## Tests \n
  ${data.test}

  # Questions \n
  Created by ${data.github} / [(GitHub Profile)](https://github.com/${data.github})
  For additional questions or collaborations, please reach out at ${data.email}.

`;
};

module.exports = generateMarkdown;



// var toc = require('markdown-toc');

// const generateMarkdown = data => {
//   return new Promise((resolve, reject) => {

//     generateContent(data, err => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       //if no error resolve Promise and send successful data on
//       resolve({
//         ok: true,
//         message: 'Content generated!'
//       });
//     });
//   });
// }; 

// generateMarkdown()
//   .then(succesfulResponse => {
//     // this runs when we use resolve
//     return generateMarkdown(data);
//     // function generateToc (generateMarkdown) {
//     //   toc(generateMarkdown).content;
//     // };
    
//   })

// // loop languages array to create a list
// function generateLanguages(langArr) {
//   // const newLangArr = langArr.join(" ");
//   // console.log(newLangArr);
//   let langString = langArr.join();
//   let newString = langString.replace(',', ' ');

//   let newLangArr = newString.split(" ");
//   const mapLangArr = newLangArr.map((lang, i, langArr) => {
//     return `- ${lang} \n`;
//   });

//   return mapLangArr;
// }; 
