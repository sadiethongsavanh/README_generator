// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return ``
  }
  else{
    return `[![${license}](https://img.shields.io/badge/${license}-blue.svg)](${renderLicenseLink(license)})`
    // [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
   License-MIT



  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ``
  }
  else if (license === "License-MIT") {
    return `https://opensource.org/licenses/MIT`
  }
  else if (license === "License-Apache_2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  else if (license === "License-BSD_2--Clause") {
    return `https://opensource.org/licenses/BSD-2-Clause`
  }
  else if (license === "License-Boost_1.0") {
    return `https://www.boost.org/LICENSE_1_0.txt`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ``
  }
  else{
    return `this project is protected under the license ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## table of contents
  [description](#description)
  [installation](#installation)
  [usage](#usage)
  [license](#license)
  [contributing](contributing)
  [tests](tests)
  [questions](questions)

  ## description
  ${data.description}

  ## installation
  ${data.installation}

  ## usage
  ${data.usage}

  ## license
  ${renderLicenseSection(data.license)}

  ## contributing
  ${data.contributing}

  ## tests
  ${data.tests}

  ## questions
  contact us at ${data.email}
  my github repo is https://github.com/${data.github_username}
`;
}

module.exports = generateMarkdown;
