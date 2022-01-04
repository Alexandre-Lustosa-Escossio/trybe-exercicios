//forEach
/* const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
emailListInData.forEach(showEmailList)

 */

//find
/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => (number % 3 == 0 && number % 5 == 0)

console.log(numbers.find(findDivisibleBy3And5)) */

/* const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5

console.log(names.find(findNameWithFiveLetters)); */

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' }
  ]
  

function findMusic(music,index,array,id) {
    /* Source: https://www.youtube.com/watch?v=QJiN7HeVSq0&ab_channel=Webucator */
    return music.id == this
  }
  
console.log(musicas.find(findMusic,'31031685'))