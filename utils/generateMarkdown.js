// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// loop languages array to create a list
function generateLanguages(data) {
  let langArr = data.languages;
  console.log(langArr);

  for (var l of langArr) {
    return `
      ${l}
    `
  }
}; 


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  
  # ${data.title}

  ## Table of Contents
  - Purpose
  - Description
    - User Story
  - Technical Details
    - Installation
    - Useage
    - License
    - Contributing
    - Tests
  - Questions

  ## Purpose
  ${data.purpose}

  ## Description
  ${data.description}

  ### User Story
  ${data.userStory}

  ## Technical Details
  ### Built With:
  - ${data.languages.join(', ')}
  OR
  ${generateLanguages(data)}


  ### Installation
  ${data.instructions}

  ### Useage
  ${data.useage}

  ### License

  ### Contributing
  ${data.contributions}

  ### Tests
  ${data.test}

  ## Questions
  ${data.questions}

  Created by ${data.github} / [(GitHub Profile)](https://github.com/${data.github})
  For additional questions or collaboration, please reach out at ${data.email}.

`;
}

module.exports = generateMarkdown;
