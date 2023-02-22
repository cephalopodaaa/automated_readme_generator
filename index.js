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
            ? contentsArray = response.contents.split(",")
            : hideContents = true;
        console.log(contentsArray);

        let contentsTitle = "## Contents";
        hideContents
            ? contentsTitle = ""
            : console.log("");



let README = `
    
\# ${response.title}
        
\#\# Description

${response.description}

${contentsTitle}
`;
for (let i = 0; i < contentsArray.length ; i++) {
    README += "- [" + contentsArray[i] + "](#"+contentsArray[i]+")\n";
};
README += `\#\# Installation

${response.installation}

\#\# Usage

${response.usage}

## License

${response.licence}

## Contribute

${response.contributions}

## Tests

${response.tests}

## Questions

If you have any questions about this repo, [click here](https://github.com/${response.questions}) to contact me via my github.

`
        console.log(README);
        fs.writeFile('README.md', README, function (err) {
            if (err) throw err;
            console.log('README saved as markdown file');
        });

    });

