const inquirer = require('inquirer');

const min = 0;
const max = 100;
const numberToGuess = Math.floor(Math.random() * (max - min + 1)) + min;
const maxAttempts = 10;

console.log('Welcome to the Number Guessing Game!');

const Name = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'userName',
            message: 'Please enter your name: ',
        }
    ]);
};

const playGame = (numberToGuess, attemptsLeft, userName) => {
    if (attemptsLeft === 0) {
        console.log(`Sorry, ${userName} run out of attempts! The number was ${numberToGuess}.`);
        return;
    }

    inquirer.prompt([
        {
            type: 'input',
            name: 'guess',
            message: `Guess a number between 1 and 100 (Attempts left: ${attemptsLeft}): `,
        }
    ]).then(answers => {
        const guess = parseInt(answers.guess);

        if (guess === numberToGuess) {
            console.log(`Congratulations, ${userName}! You guessed the right number!`);
        } else {
            if (guess < numberToGuess) {
                console.log('Too low!');
            } else {
                console.log('Too high!');
            }
            playGame(numberToGuess, attemptsLeft - 1, userName);
        }
    });
};

Name().then(answers => {
    const userName = answers.userName;
    playGame(numberToGuess, maxAttempts, userName);
});