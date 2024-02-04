//function to create license badge if user selected 
function renderLicenseBadge(license) {
  const licenseColors = {
    MIT: 'blue',
    'GNU GPL v3': 'green',
    'Apache License 2.0': 'orange',
    ISC: 'yellow',
    None: 'red',
  };

  if (!license || license === 'None') {
    return '';
  }
  //replace spaces in license name with URL-encoded spaces (%20)
  const licenseParam = license.replace(/ /g, '%20');
  const color = licenseColors[license];
  return `![License](https://img.shields.io/badge/License-${licenseParam}-${color}.svg)`;
}

//function to create license link based on user input
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GNU GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'ISC':
      return 'https://opensource.org/licenses/ISC';
    case 'None':
    default:
      return '';
  }
}

//function to create license section in markdown
function renderLicenseSection(license) {
  if (!license || license === 'None') {
      return '';
  }
  const licenseLink = renderLicenseLink(license); //get the license link
  return `
## License

This project is licensed under the ${license} license. For more information, see [here](${licenseLink}).
  `;
}

//function to create the entire readme in markdown
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license); //get the license badge

  const licenseSection = renderLicenseSection(data.license); //get the license section

  return `# ${data.title} ${badge} 

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact me at [${data.email}](mailto:${data.email}) or visit my GitHub profile [here](https://github.com/${data.github}).

${licenseSection}
`;

}

module.exports = generateMarkdown;