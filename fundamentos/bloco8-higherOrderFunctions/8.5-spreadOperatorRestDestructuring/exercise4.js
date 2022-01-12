const people = [
  {
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian",
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian",
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian",
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish",
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian",
  },
];

// escreva filterPeople abaixo
const filterPeople = (arr) => {  
  let auxArr = []  
  arr.forEach((person) => {
      const {name, bornIn, nationality} = person;
      (bornIn < 2000 && nationality === 'Australian')?auxArr.push(name):auxArr; 
  });;
  return auxArr
};
console.log(filterPeople(people));