// Método filter server para filtrar e exbir determinados items de acordo com os parametros definidos

const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

const dadosFilter = dados.filter((item) => typeof item !== 'number')

console.log(dadosFilter)

// retorna  numeros maior do que 20.


const listaNumeros = [10, 20, 30, 40];

const maiorQueVinte = listaNumeros.filter((item) => item > 20 );

console.log(maiorQueVinte)
  