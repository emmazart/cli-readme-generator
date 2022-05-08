// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (license === 'None') { return ''; }

  return `![License](https://img.shields.io/badge/license-${license}-yellow.svg)`;
};

// Create a function that returns the license link
function renderLicenseLink(license) {
  // If there is no license, return an empty string
  if (license === 'None') { return ''; }

  return `[visit the ${license} documentation](https://opensource.org/licenses/${license})`;
};

// Create a function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (license === 'None') {return ''}

  else {return `
  Application currently licensed under ${license}. For more information on this license please ${renderLicenseLink(license)}.
  `;
}};

// function that returns optional deployment link
function renderDeployedLink(link) {
  if(!link) {
    return '';
  }

  return `[Link to Deployed Application](${link})`;
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = function(data) {

  // dynamically create table of contents with optional sections
  let tableOfContents = `
  <ol>
    <li><a href=#description>Description</a></li>
    <ol>
      <li><a href=#user-story>User Story</a></li>
    </ol>
    <li><a href=#technical-details>Technical Details</a></li>
    <ol>
      <li><a href=#license>License</a></li>`

      if (data.instructions) {
        tableOfContents += `\n <li><a href=#installation>Installation</a></li>`
      };

      if (data.useage) {
        tableOfContents += `\n <li><a href=#usage>Useage</a></li>`
      };

    tableOfContents += `\n </ol>`

    if (data.contributions) {
      tableOfContents += `\n     <li><a href=#contributing>Contributing</a></li>`
    }

    if (data.useage) {
      tableOfContents += `\n     <li><a href=#tests>Tests</a></li>`
    }
    
    tableOfContents += `<li><a href=#questions>Questions</a></li>
  </ol>
  `;

  // main generate markdown 
  return `
  
  # ${data.title}  |   ${renderLicenseBadge(data.license)}

  # Description \n
  ${data.description}
  ${renderDeployedLink(data.deployed)}

  ## User Story \n
  ${data.userStory}

  # Table of Contents
  ${tableOfContents}

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
