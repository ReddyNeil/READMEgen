// Function to render badge image for licence type
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}
// Function to create a link to licence section
function renderLicenseLink(license) {
  if (license !== 'None') {
    return (
      `\n* [License](#license)\n`
    );
  }
  return '';
}
// Function to create the licence section
function renderLicenseSection(license) {
  if (license !== 'None') {
    return (
      `## License

This project is licensed under the ${license} license.`
    );
  }
  return '';
}

// Function to create Markdown for README 
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions about the repo, please contact me directly at ${data.email}.

`;
}

module.exports = generateMarkdown;

