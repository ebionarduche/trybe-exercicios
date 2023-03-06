// const valorItens = [1, 32, 44, 2, 3];

// valorItens.reduce((acc, curr) => {
//   console.log(`acumulador - acc:`, acc);
//   console.log(`valorAtual - curr:`, curr);
// }, 0);


const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
  console.log(`valor atual é ${curr}`);
  // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
  // Iteração 1: valor do acc é 1 e o de curr é 32;
  // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
  // Iteração 2: valor do acc é 33 e o de curr é 44;
  // Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
  // Iteração 3: valor do acc é 77 e o de curr é 2;
  // Iteração 4: valor do acc é 79 e o de curr é 3;
  // Valor final de `acc` é 82 e `curr` para no 3.

  return  acc + curr; // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
});

// Tente somar todos esses valores usando o reduce()

const numbers = [1, 32, 44, 2, 3];

const totalSum = numbers.reduce((acc, curr) => acc + curr);

// console.log(totalSum)

const totalSumR = numbers.reduce((acc, curr) => {
  console.log(`Valor do acc é ${acc} e o valor de curr é ${curr}`);
  return acc + curr
})
console.log(`valor finado do acc é ${totalSumR}`);
