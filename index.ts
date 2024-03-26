import inquirer from "inquirer";

//1) Computer will generate a number
//2) user input for guessing number
//3)Compare user input with computer generted number

const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number from 1- 10",
    }
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed the right number")
}
else {
    console.log("You guessed wrong number");
}