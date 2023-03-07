const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//encontrar um livro com altor de nascido em 1947.

const expectedResult = 'Stephen King';
const authorBornIn1947 = books.find((book) => book.author.birthYear === 1947).author.name;

// console.log(authorBornIn1947)

// retornar o livro com menor numero.

const smallerName = () => {
  let namebook;

  books.forEach((book) => {
    if (!namebook || book.name.length < namebook.length) {
      namebook = book.name
    }
  });
  return namebook;
}

// console.log(smallerName())

//retornar um livro cujo o nome tenha 26 caracteres

const getNameBook = (array) => array.find((book) => book.name.length === 26).name;

// console.log(getNameBook(books));

// retornar true se todos os autores nasceram no século XX

const everyoneWasBornOnSecXX = (array) => array.every((birth) => {
  birth.author.birthYear >= 1901 || birth.author.birthYear <= 2000
});

// console.log(everyoneWasBornOnSecXX(books));

//retornar true caso algum livro tenha sido lançado em 1980 a 1989

const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}
console.log(someBookWasReleaseOnThe80s());

