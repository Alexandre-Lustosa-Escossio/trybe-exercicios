const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//Exercicio 1
/*   const strArr = books.map((book) => {return `${book.name} - ${book.genre} - ${book.author.name}`})
  console.log(strArr);
 */

//Exercicio 2
/* const orderedArr = books.map((book) => ({age: book.releaseYear - book.author.birthYear,author: book.author.name})).sort((a,b) => a.age-b.age)
console.log(orderedArr);  */

//Exercicio 3
/* const filteredArr = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
console.log(filteredArr); */

//Exercício 4
/* const oldBooks = books.filter((book) => 2022 - book.releaseYear >= 60).sort((a,b) => a.releaseYear - b.releaseYear)
console.log(oldBooks); */

//Exercício 5
/* const filteredArr = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica').sort((a,b) => {
   return a.author.name[0] > b.author.name[0]?1:-1 
})
console.log(filteredArr);
 */

//Exercício 6
/* const oldBooks = books.filter((book) => 2022 - book.releaseYear >= 60) */

//Exercício 7
const author = books.filter((book) => book.author.name.match(/.\. .\. .\./))
console.log(author);

