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
  return `# ${data.title}
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
