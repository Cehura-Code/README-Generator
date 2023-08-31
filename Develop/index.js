//inquirer
const inquirer = require("inquirer");

// import file manager
const fs = require("fs");

//there needs to be file texts here for each section
//username, badge, readme, contents, table of contents, description, installation,
//usage, contribution, testing
//this function writes the users readme file with user input 
//side note- /n/n is to create a new line between each section
function writeToFile(fileName, data) {
  var fileText = "";
  //this is where the users name goes
  fileText += `${data.name}'s README\n\n`;
  //this is where the users README file goes

  //badge
  fileText += ` # ${data.title}\n\n`;

  //contents
  fileText += `${generateLicense(data.license)}\n\n`;

  //table of contents
  fileText += `## Table of Contents\n\n`;
  
  //sections table of contents
  fileText += ` * [Description](#description)\n\n * [Installation](#installation)\n\n * [Usage-Information](#usage-information)\n\n * [Contribution-Guidelines](#contribution-guidelines)\n\n * [Test-Instructions](#test-instructions)\n\n * [License](#license)\n\n * [Questions](#questions)\n\n`;
  
  //description 
  fileText += `## Description\n\n${data.description}\n\n`;
  
  //installation
  fileText += `## Installation\n\n${data.installation}\n\n`;
  
  // usage info
  fileText += `## Usage Information\n\n${data.usage}\n\n`;
  
  //contribution 
  fileText += `## Contribution Guidelines\n\n${data.contribution}\n\n`;
  
  //testing
  fileText += `## Test Instructions\n\n${data.test}\n\n`;
  
  //license section 
  fileText += `##  ${data.license}\n\n`;
  
  //questions section
  fileText += `## Click the links below.\n\n`;
  
  //link to github user
  fileText += `[Link to Github](https://github.com/${data.github})\n\n`;
  
  //users email
  fileText += `<a href="mailto:${data.email}">${data.email}</a>\n\n`;
  fs.writeFile(fileName, fileText, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}


function generateLicense(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    // Apache 2.0 License
  } else if (license === "Apache 2.0 License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    //IBM Public License Version 1.0
  } else if (license === "IBM Public License Version 1.0") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    //Mozilla Public License 2.0
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    //Unlicense
  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

//questions
function init() {
  inquirer
    .prompt([
      //users name 
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      //user title 
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      //read me user description
      {
        type: "input",
        message: "Add the description of your project:",
        name: "description",
      },
      //installation instructions 
      {
        type: "input",
        message: "Add the installation instructions of your project:",
        name: "installation",
      },
      //usage info input for the user
      {
        type: "input",
        message: "Add the usage information of your project:",
        name: "usage",
      },
      //guideline input for user
      {
        type: "input",
        message: "Add the contribution guidelines of your project:",
        name: "contribution",
      },
      //user test instructions input
      {
        type: "input",
        message: "Add the test instructions of your project:",
        name: "test",
      },
      //readme options for the user
      {
        type: "list",
        message: "Select the type of license you would like for your project:",
        choices: [
          "MIT",
          "Apache 2.0 License",
          "IBM Public License Version 1.0",
          "Mozilla Public License 2.0",
          "The Unlicense",
        ],
        name: "license",
      },
      //user github input
      {
        type: "input",
        message: "What is your GitHub handle?",
        name: "github",
      },
      //user email input
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
    ])
    .then((data) => {
      writeToFile("sample-README.md", data);
    });
}//initialize app
init();

//npm i to install package.json and package-lock.json along with the Node Module files.

///////NOTES for feedback purposes for grading/////////////////////////////////
//package-lock.json cannot be edited? I dont have a clear understanding to how this connects with
//the code I have for my index.js file if I am unable to edit it, but it is working.
