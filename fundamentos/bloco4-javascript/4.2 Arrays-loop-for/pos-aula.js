let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//exercicio 1
/* for (number of numbers) {
  console.log(number);
}

//exercicio 2
let soma = 0;
for (i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
console.log(soma)
 */

//exercicio 3
/* let soma = 0;
for (i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
let media = soma / numbers.length;
console.log(media);
 */

//exercicio 4
/* let soma = 0;
for (i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
let media = soma / numbers.length;
if (media>20){
    console.log('Valor maior que 20')
}else{
    console.log('Valor menor ou igual a 20')
}*/

//exercicio 5
/* let maiorNumero = 0
for (i = 0; i < numbers.length; i += 1) {
  if (maiorNumero < numbers[i]) {
    maiorNumero = numbers[i]
  }
}
console.log(maiorNumero)
 */

//exercicio 6
/* let countOdd = 0
for (let i = 0; i<numbers.length; i++){
    if(numbers[i]%2 != 0){
        countOdd += 1
    }
}
if (countOdd == 0){
    console.log('Nenhum valor impar encontrado')
}else{
    console.log('Quantidade de impares: ', countOdd)
} */

//exercicio 7
/* let menorNumero = 0
for (i = 0; i < numbers.length; i += 1) {
  if (menorNumero > numbers[i]) {
    menorNumero = numbers[i]
  }
}
console.log(menorNumero)
 */

//exercicio 8
/* let array = [];
for (i = 0; i <= 24; i += 1) {
  array.push(i+1);
}
console.log(array);

//exercicios 9
for (i = 0; i < array.length; i += 1) {
    console.log(array[i]/2);
  } */
  

//bonus
/* for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < numbers.length-index; secondIndex += 1) {
      if (numbers[secondIndex] > numbers[secondIndex+ 1]) {
        let aux = numbers[secondIndex];
        numbers[secondIndex] = numbers[secondIndex +1];
        numbers[secondIndex+1] = aux;
      }
    }
  }
console.log(numbers)

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < numbers.length-index; secondIndex += 1) {
      if (numbers[secondIndex] < numbers[secondIndex+ 1]) {
        let aux = numbers[secondIndex];
        numbers[secondIndex] = numbers[secondIndex +1];
        numbers[secondIndex+1] = aux;
      }
    }
  }
console.log(numbers) */
let array =[]
for(i = 0; i<numbers.length; i+=1){
    if(i < numbers.length -1){
        array.push(numbers[i]*numbers[i+1])
    } else{
        array.push(numbers[i]*2)
    }
}
console.log(array)