const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const grades2 = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};

// retornar true caso todos os parametros sejam atendidos! 

const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado');

// console.log(verifyGrades); // false

const verifyAllGrades = (obj) => Object.values(obj).every ((grade) => grade === 'Aprovado');

// console.log(verifyAllGrades(grades)); // false
// console.log(verifyAllGrades(grades2)); // true


// exercicios de fixação 'every' --- Retornar true or false se a pessoas tiver a idade mínima especifica (parametro 2)

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arry, age) => arry.every((person) => person.age >= age);

console.log(verifyAges(people, 19));
console.log(verifyAges(people, 14));


