const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What's ur name lady?",
    },
];

inquirer.createPromptModule(questions).then(answers => {
    console.log(`Hi ${answers.name}!`)
});