const numbers = [50, 85, -30, 3, 15];

const bigger = numbers.reduce((bigger, number) => bigger > number ? bigger : number);

// console.log(bigger);



// some apenas os números pares
const numberPart02 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = (number) => number % 2 === 0;

const sum = (acc, number) => acc + number;

const sumNumbers = (array) => array.filter(isEven).reduce(sum);

console.log(sumNumbers(numberPart02)); 


// outra forma de resolver
const sum02 = (acc, number) => (
  (number % 2 === 0) ? acc + number : acc
);

const sumNumbers02 = (array) => array.reduce(sum02, 0);

console.log(sumNumbers02(numberPart02));