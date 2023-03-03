

// retornar true caso alguma pessoa tenha o cargo de gerência usando o 'array.some'

const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência')

// console.log(verificaCargo)


// retornar algum true caso o nome comece com a letra desejada

// o parâmetro names ass ao ' .some ' e name seria = aos valores do array. pensando dessa maneira usar o [0] selecionamos a primeira letra. 

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames));
// console.log(verifyFirstLetter('X', listNames));


// exercicios de fixação 'some' -- retonar se o nome das pessoas estão na lista.

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((names) => names === name);

console.log(hasName(names, 'Mateus'));
console.log(hasName(names, 'José'));
console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Flavin do Pneu'));



