// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Purpose
  ${data.purpose}

  ### Project Description
  ${data.description}

  ### User Story
  ${data.userStory}

  ## Technical Details
  ### Installation Instructions
  ${data.instructions}

  ### Useage Information
  ${data.useage}

  ### Contribution Guidelines
  ${data.contributions}

  ### Testing Instructions
  ${data.test}

  Created by ${data.github} / [(GitHub Profile)](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
