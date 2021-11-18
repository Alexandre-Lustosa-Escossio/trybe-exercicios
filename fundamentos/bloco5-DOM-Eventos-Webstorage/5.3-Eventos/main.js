const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// 1.2 R: a propriedade translateY na classe .tech está deslocando a a primeira li 20px para cima
// 1.2 R: Souce: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY()

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let liClicked = document.body.getElementsByTagName('li')
console.log(liClicked)
for (let i =0; i<liClicked.length;i+=1){
    liClicked[i].addEventListener('click',addClassOnce)
}
function addClassOnce(event){
    for (let i =0; i<liClicked.length; i+=1){
        liClicked[i].className = ''
    }
    event.target.className = 'tech'
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
let inputBox = document.getElementById('input')
inputBox.addEventListener("keyup",changeTechText)
function changeTechText(event){
    //Source: https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
    let techElement = document.querySelector(".tech").innerText = inputBox.value

}



// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
let getH3 = document.querySelector('h3')
getH3.addEventListener('dblclick',redirect)
function redirect(){
    //Source: https://www.geeksforgeeks.org/how-to-open-url-in-new-tab-using-javascript/
    window.open("https://www.linkedin.com/in/alexandre-lustosa",target='_blank')
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
getH3.addEventListener('mouseover',changeElementColor)
function changeElementColor(){
    getH3.style.color = "blue"
}

getH3.addEventListener('mouseout',resetElementColor)
function resetElementColor(){
    getH3.style.color = "white"
}
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.