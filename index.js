const inquirer = require('inquirer');
const fs = require('fs');


fs.readFile('template.md', 'utf8', (error, data) =>
error ? console.error(error) : console.log(data)
);




inquirer
    .prompt([
        {
            type: 'input',
            message: 'choose your README title:',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Give a brief overview of the installation process',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Select a Licence for the project',
            name: 'licence'
        }
    ])
    .then((response) => {

        console.log(response.title, response.description, response.installation, response.licence)


    })