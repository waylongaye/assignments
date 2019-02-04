var ask = require("readline-sync");

var responseName = ask.question("What is your first name?: ");

console.log(responseName.toUpperCase() + " " + `You have ${responseName.length} characters in your name!`);

var responsePhrase = ask.question("What is your favorite phrase?: ");

var half = responsePhrase.length / 2;

console.log(responsePhrase.slice(0, Math.floor(half)));

