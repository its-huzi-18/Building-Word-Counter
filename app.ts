#! /usr/bin/env node 
import inquirer from "inquirer";
const answer: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "Enter your sentence to count the word",
  },
]);

const words = answer.Sentence.trim().split(" ");

//print the array of the word of console
console.log(words);

//print the word count of the sentence
console.log(`Your sentence word count is ${words.length}`)
