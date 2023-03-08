const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (marca, modelo ,ano) => {
  return  {
    marca,
    modelo,
    ano,
  }
};

console.log(toObject(...palio));
