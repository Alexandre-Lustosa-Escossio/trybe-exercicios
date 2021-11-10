//exercicio 1
/* function verificaPalindrome(palavra) {
  for (i = 0; i < palavra.length; i += 1) {
    if (palavra[i] !== palavra[palavra.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento")); */

/* //exercicio 2
function indexOfBigger(array) {
  let biggerNumber = array[0];
  let positionBiggerNumber = 0;
  for (key in array) {
    if (biggerNumber < array[key]) {
      biggerNumber = array[key];
      positionBiggerNumber = key;
    }
  }
  return positionBiggerNumber;
}
let array = [2, 3, 6, 7, 10, 1];
console.log(indexOfBigger(array));

//exercicio 3
function indexOfSmaller(array) {
  let smallerNumber = array[0];
  let positionSmallerNumber = 0;
  for (key in array) {
    if (smallerNumber > array[key]) {
      smallerNumber = array[key];
      positionSmallerNumber = key;
    }
  }
  return positionSmallerNumber;
}
console.log(indexOfSmaller(array));

//exercicio 4
function longestName(array) {
  let longestName = array[0];
  for (key in array) {
    if (longestName.length < array[key].length) {
      longestName = array[key];
    }
  }
  return longestName;
}
array = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
console.log(longestName(array));
 */
//exercicio 5
array = [2, 3, 2, 5, 8, 2, 3];
function countReps(array) {
  uniqueValues = { primeiro: 0 };
  for (element of array) {
    let repeated = false
    for (key in uniqueValues) {
      if (element == key) {
        uniqueValues[element] += 1;
        repeated = true
      }
    }
    if (repeated != true){
        uniqueValues[element] = 1
    }
  }

  return uniqueValues;
}

countedReps = countReps(array)

function getMostRepeated(countedReps){
    let mostRepeated = 0;
    for (key in countedReps){
        if (countedReps[key] > mostRepeated){
            mostRepeated = key
        }
    }
    return mostRepeated;
}

console.log(getMostRepeated(countedReps))

