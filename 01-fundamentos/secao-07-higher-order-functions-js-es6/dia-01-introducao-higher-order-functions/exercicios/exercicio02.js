//Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callBack) => {
  const number = Math.round((Math.random() * 5));
  return callBack(myNumber, number) ? 'Luck day, you won!' : 'Try again!';

};

console.log(lotteryResult(2, numberChecker));
