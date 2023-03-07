// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// nova variável
const newItems = [...items, 'Meias'];

console.log(newItems);

// spread operator cria um nova array e add o valor que colocamos apos a virgula 

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring,];
console.log(months);