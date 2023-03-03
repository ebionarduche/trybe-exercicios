
// econtrar numero divisivel por 3 e por 5 no array.

const numbers = [19, 21, 30, 3, 45, 22, 15];


const verifyNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(verifyNumbers);

// encontrar nome com mais de 5 letras!

const names = ['João', 'Irene', 'Fernando', 'Maria']

const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5);
};

console.log(findNameWithFiveLetters());

// encontrar o id igual a 31031685, caso ele exista!

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const searchId = musicas.find((musics) => musics.id === '31031685')
const searchTitle = musicas.find((title) => title.title === 'Toccata and Fugue, BWV 565')
console.log(searchTitle);
console.log(searchId);

//exercicios find ok!!!

//testando um exemplo

const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade < 20)
