const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names
    .map((name) => name.toLowerCase().split(""))
    .reduce((acc, curr) => {
      console.log(curr);
      if (curr === 'a') {
        return acc++;
      } else {
        return acc;
      }
    }, 0);
}

containsA();
//console.log(containsA())
