//Exercicio 1
/* function factorial(number){
    let factorial = 1;
    for (let i = 2; i <= number; i+=1){
        factorial *= i;
    }
    return factorial
}

console.log(factorial(4)); */

//Exercicio 2
/* function longestWord(str){
    let strArray = str.split(' ') 
    let longest = strArray[0];
    strArray.forEach(element => {(longest.length < element.length)?longest=element:longest});
    return longest;
}
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu' */

//Exercicio 3
/* const btn = document.querySelector('.btn')
let clickCount = 0
const displayCount = document.createElement('span')
const body = document.querySelector('body')
body.appendChild(displayCount)
btn.addEventListener('click',()=>{
    clickCount +=1;
    displayCount.innerText = `Contador: ${clickCount}`
}) */

//Exercício 4
let skills = ['b','a','d','c','e']
function overwriteX(str){
    let phrase = 'Tryber x aqui!'
    phrase = phrase.replace(phrase[phrase.indexOf('x')],str)
    return phrase
}

function addSkills(phrase,skills){
    skills = skills.sort()
    const newPhrase = `${phrase} Minhas cinco principais habilidades são: ${skills}`
    return newPhrase
}

console.log(addSkills(overwriteX('bebeto'),skills))