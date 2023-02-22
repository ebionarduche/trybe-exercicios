const customer = {
  firstName: 'Jorge',
  age: 22,
  job: 'Teacher',
};

const chave = 'nascionalidade'
const chave02 = 'status civil'
const value = 'casado'

const addPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor;
};

addPropriedade(customer, chave, 'brasileiro');

console.log(customer);

addPropriedade(customer, 'data de nascimento', '27/04/2000');

console.log(customer);

addPropriedade(customer, chave02, value);
console.log(customer);
