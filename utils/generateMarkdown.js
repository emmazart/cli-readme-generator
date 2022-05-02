// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (license === 'None') { return `No License Selected`}
  if (license === 'MIT') { return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)` }
  else if (license === 'Apache') { return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)` }
  else if (license === 'GPL') { return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)` }
  else { return '' }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (license === 'None') { return `No License Selected`}
  if (license === 'MIT') { return `[Link to MIT](https://opensource.org/licenses/MIT)` }
  else if (license === 'Apache') { return `[Link to Apache 2.0](https://opensource.org/licenses/Apache-2.0)` }
  else if (license === 'GPL') { return `[Link to GPL v3](https://www.gnu.org/licenses/gpl-3.0)` }
  else { return '' }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {return ''}

  else {return `
  Current License: ${license}
  ${renderLicenseLink(license)}
  `;
}};

// loop languages array to create a list
function generateLanguages(langArr) {
  console.log(langArr);

  const mapLangArr = langArr.map((lang, i, langArr) => {
    console.log(`- ${lang}\n`);
    return `- ${lang}\n`;
  });

  // maybe i need to destructure the existing array (langArr) and 
  // create elements based on whether or not the variable is defined?

  [a, b, c, d, e, f, g] = [langArr];
  if (a) {  }

  return 
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
  ${generateLanguages(data.languages)}

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
