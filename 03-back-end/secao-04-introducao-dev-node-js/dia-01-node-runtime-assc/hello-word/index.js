const readline = require('readline-sync');

const name = readline.question('Qual é o seu nome? ')
const idade = readline.questionInt('Qual é sua idade? ')
console.log(`Hello, ${name}! You are ${idade} years old!`);

