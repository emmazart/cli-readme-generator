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
  Current License: ${license}\n
  ${renderLicenseLink(license)}
  `;
}};

// loop languages array to create a list
function generateLanguages(langArr) {
  console.log(langArr);

  // const mapLangArr = langArr.map((lang, i, langArr) => {
  //   console.log(`- ${lang}\n`);
  //   return `- ${lang}\n`;
  // });

  for (l of langArr) {
    return `- ${l}\n`;
  }

  // return mapLangArr;
}; 


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  
  # ${data.title}  |   ${renderLicenseBadge(data.license)}

  ## Table of Contents
  -[Purpose](#purpose)\n
  -[Description](#description)\n
  -[Technical Details](#technical-details)\n
  -[Installation](#installation)\n
  -[Useage](#useage)\n
  -[License](#license)\n
  -[Contributing](#contributing)\n
  -[Tests](#tests)\n
  -[Questions](#questions)\n

  ## Purpose
  ${data.purpose}

  ## Description
  ${data.description}

  ### User Story
  ${data.userStory}

  ## Technical Details
  ### Built With: ${data.languages.join(', ')}


  ### Installation
  ${data.instructions}

  ### Useage
  ${data.useage}

  ### License
  ${renderLicenseSection(data.license)}

  ### Contributing
  ${data.contributions}

  ### Tests
  ${data.test}

  ## Questions
  Created by ${data.github} / [(GitHub Profile)](https://github.com/${data.github})
  For additional questions or collaboration, please reach out at ${data.email}.

`;
}

module.exports = generateMarkdown;
