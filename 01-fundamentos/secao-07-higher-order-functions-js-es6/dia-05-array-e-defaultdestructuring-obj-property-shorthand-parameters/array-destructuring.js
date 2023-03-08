// Produza o mesmo resultado acima, porém utilizando array destructuring

const primeNumbers = [17, 23, 37]
const [firstNumber, secondNumber, thirdNumber] = primeNumbers

const sum = (a, b) => {
  console.log(a + b);
}
sum(firstNumber, thirdNumber);
sum(primeNumbers[0], primeNumbers[2]) // 54

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo


let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// [comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

// [,,,, ...numerosPares] = numerosPares;

// console.log(numerosPares); // [6, 8, 10, 12];

const arrayTest = ['ebio', 'marcos', 'igor', 'carilnhi']

console.log(...arrayTest);

