const inquirer = require('inquirer');
const fs = require('fs');

// I wanted to import this template file and fill the spaces with 
// fs.readFile('template.md', 'utf8', (error, data) =>
//     error ? console.error(error) : let templateREADME = data
// );

inquirer
    .prompt([
        {
            type: 'input',
            message: 'choose your README title:',
            name: 'title'
        },
        {
            type: 'input',
            message: 'list the titles of your contents using a comma separated list (press enter for no contents)',
            name: 'contents'
        },
        {
            type: 'input',
            message: 'Provide a short description explaining the what, why, and how of your project. What was the motivation? what problem does it solve? what did you learn?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Give a brief What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for usage of your program.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Select a Licence for the project',
            name: 'licence'
        },
        {
            type: 'input',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.The[Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you prefer.',
            name: 'contributions'
        },
        {
            type: 'input',
            message: 'outline how you test the program',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'and finally enter your github username so people can find you!',
            name: 'questions'
        }
    ])
    .then((response) => {
        // let makeContents;
        // response.contentsChoice === 'yes'
        //     ? makeContents = true
        //     : makeContents = false;
        let hideContents;
        let contentsArray;
        response.contents
            ? contentsparse(response.contents)
            : hideContents = true
        console.log(contentsArray)

        let contentsTitle = "## Contents"
        hideContents
            ? contentsTitle = ""
            : console.log("");








        const README = `
        
        \# ${response.title}
        
        \#\# Description

${response.description}

\#\# Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

\#\# Installation

${response.installation}

\#\# Usage

${response.usage}

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third - party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

${response.licence}
The last section of a high - quality README file is the license.This lets other developers know what they can and cannot do with your project.If you need help choosing a license, refer to[https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document.You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing.Check out the badges hosted by[shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## How to Contribute

${response.contributions}
## Tests

${response.tests}

## Questions

If you have any questions about this repo, [click here](github.com/${response.questions}) to contact me via my github.



`
        console.log(README);
        fs.writeFile('README.md', README, function (err) {
            if (err) throw err;
            console.log('README saved as markdown file');
        });

    });

