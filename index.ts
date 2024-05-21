#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Guess a number 1 to 10",
  },
]);

if (answers.userGuessedNumber === randomNumber) 
{console.log(`Congratulations! You've guessed the correct number`)
  }
   else {
  console.log(`Sorry! You've guessed the wrong number`);
}
