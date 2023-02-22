const coutries = {
  franca: 'Paris',
  brasil: 'Brasília',
  espanha: 'Madrid',
  portugal: 'Lisboa',
};

coutries.china = 'pequim'
coutries['canada'] = 'ottawa'

console.log(coutries)

const pairKeyValue = Object.entries(coutries);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};
