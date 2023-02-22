const verificavalores = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Erro! os valores precisam ser numéricos! kk')
  }
};

const soma = (a, b) => {
  try {
    verificavalores(a, b);
    return a + b
  }
  catch (erro) {
    return erro.message;
  }
};
console.log(soma(1, 1))
// console.log(soma(5, '5'));
