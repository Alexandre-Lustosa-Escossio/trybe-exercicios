//Exercicio 1
/* let n = 5;
let ast = "*".repeat(n);
for (i = 0; i <= n; i += 1) {
  console.log(ast);
}
 */

//Exercicio 2
/* let n = 5;
for (i = 0; i <= n; i += 1) {
  let ast = "*".repeat(i);
  console.log(ast);
} */

//Exercicio 3
/* let n = 5;
for (let i = 1; i <= n; i += 1) {
  let ast = "*".repeat(i);
  let space = " ".repeat(n - i);
  console.log(space + ast);
} */

//Exercicio 4
/* let n = 5;
for (let i = 1; i <= n; i += 2) {
  let ast = "*".repeat(i);
  let space = " ".repeat((n - i)/2);
  console.log(space + ast + space);
}
 */
//Exercicio 5
/* let n = 9;
let midSpaceInit = " ";
let midSpace = " ";
for (let i = 1; i < n; i += 2) {
  let ast = "*";
  let space = " ".repeat((n - i) / 2);
  if (i == 1) {
    console.log(space + ast + space);
  } else if (i == 3) {
    ast = "*";
    console.log(space + ast + midSpace + ast + space);
  } else {
    midSpace = midSpaceInit.repeat(i - 2);
    console.log(space + ast + midSpace + ast + space);
    if (space.length === 1) {
      console.log(ast.repeat(n));
    }
  }
}
 */
//Exercicio 6
let numero = 10;
let contagem = 0;
for (i = 1; i < numero; i += 1) {
  if (numero % i == 0) {
    contagem += 1;
  }
}
if (contagem > 2) {
  console.log("Número não primo");
} else {
  console.log("Número primo");
}
