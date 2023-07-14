function calcularDivisão(num1, num2) {
  if(num2 == 0) throw new Error('Não pode ser feito divisão por zero')
  const resultado = num1 / num2;
  return resultado;
}

try {
  const resultado = calcularDivisão(2, 0);
  console.log("resultado = ", resultado)
} catch (e) {
  console.log('erro:', e.message)
}