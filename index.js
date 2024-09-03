#!/usr/bin/env node
// Install the necessary dependencies:
// npm install inquirer
import inquirer from 'inquirer';
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const askQuestion = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'guess',
            message: 'Guess a number between 1 and 100:',
            validate: (input) => {
                const guess = parseInt(input);
                if (isNaN(guess) || guess < 1 || guess > 100) {
                    return 'Please enter a valid number between 1 and 100.';
                }
                return true;
            }
        }
    ]).then((answers) => {
        attempts++;
        const guess = parseInt(answers.guess);
        if (guess === randomNumber) {
            console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
        }
        else if (guess < randomNumber) {
            console.log('Too low! Try again.');
            askQuestion();
        }
        else {
            console.log('Too high! Try again.');
            askQuestion();
        }
    });
};
askQuestion();
