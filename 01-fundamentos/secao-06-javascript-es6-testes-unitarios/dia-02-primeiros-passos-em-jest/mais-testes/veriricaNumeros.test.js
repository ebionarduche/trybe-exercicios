const numeros = require('./verificaNumeros');

describe('Requesito 1', () => {
  it('a função recebe [1, 2, 3, 4, 5] e retorna true', () => {
    expect(true).toEqual(numeros([1, 2, 3, 4, 5]));
  });
});