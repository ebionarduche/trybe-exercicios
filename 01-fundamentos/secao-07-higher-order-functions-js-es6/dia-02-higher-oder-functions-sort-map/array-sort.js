// sorte serve para ordernar os arrays, (numerais precisam da função array.sort((a, b) => a - b); ) 

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
// console.log(food);

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort((a, b) => a -b);
// console.log(inventory);

const arrayNumbers = [1, 3, 2, 12, 21, 1, 73,  5, 4, 6, 7, 8, 9, 10];

const sortNumbers = arrayNumbers.sort((a, b) => a - b);
// console.log(sortNumbers);
 
// para alterar um objeto nos temos que acessar a key para ai sim podermos ordernar!

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const agePeaple = people.sort((a, b) => a.age - b.age);

const namePeaple = people.sort((a, b) => a.name > b.name ? 1 : -1)

console.log(namePeaple);


// sort altera o array atual 