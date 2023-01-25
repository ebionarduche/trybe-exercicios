const custoDoProduto = 10;
const ValorDeVenda = 20;

if (custoDoProduto >= 0 && ValorDeVenda >= 0) {
    const custoTotal = custoDoProduto * 1.20;
    const lucroTotal = (ValorDeVenda - custoTotal) * 1000;
    console.log('O lucro total é de: R$' + lucroTotal + ",00");
} else {
    console.log('Error 404 - valores não podem ser negativos')
}
