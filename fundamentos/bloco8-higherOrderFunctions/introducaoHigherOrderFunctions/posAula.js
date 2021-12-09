//Exercicio 1
/* const newEmployees = (func = employeeData) => {
    const employees = {
      id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const employeeData = (name) => {
    const email = `${name}@trybe.com`
    return {name: name, email: email}
}

console.log(newEmployees()); */

//Exercicio 2
/* const doRaffle = () => Math.round(Math.random()/2 * 10)
const winnerPhrase = 'Parabéns você ganhou'
const loserPhrase = 'Tente novamente'
const isWinner = (betNumber, func=doRaffle) => betNumber === func()?winnerPhrase:loserPhrase
console.log(isWinner(5)); */

//Exercicio 3
/* const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (studentAnswers, cheatSheet) => {
    let grade = 0;
    for (let i=0; i<studentAnswers.length; i+=1){
        if(studentAnswers[i] === cheatSheet[i]){
            grade += 1
        } else if (studentAnswers[i] === 'N.A'){
            continue
        } else {
            grade -= .5
        }
    }
    return grade
}

const returnGrade = (func) => func

console.log(returnGrade(checkAnswers(STUDENT_ANSWERS, RIGHT_ANSWERS))); */