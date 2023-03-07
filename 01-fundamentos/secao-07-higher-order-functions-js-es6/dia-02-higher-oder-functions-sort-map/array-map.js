// funções para juntar primeiro e ultimo nome e para deixar todas as letras maiusculas
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];


const fullNames = persons.map((element) => `${element.firstName} ${element.lastName}`);
const  upperCaseName = fullNames.map((element) => element.toUpperCase());

// console.log(fullNames)
// console.log(upperCaseName);

// juntar 02 arrays fazendo um array de objetos

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const Pricesproducts = (productsList, pricesList) => productsList.map((product, index) =>{
  [product]: pricesList[index];
})

