//Parte I
/* document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'green'
console.log(document.getElementById('elementoOndeVoceEsta').children[0].innerText = 'primeiroFilhodoFilho')

console.log(document.getElementById('pai').firstElementChild)
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling)
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling.textContent)
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling)
console.log(document.getElementById('pai').children[2]) */

/* //Parte II
let element = document.createElement("section");
let currentParent = document.getElementById(
  "elementoOndeVoceEsta"
).parentElement;
currentParent.appendChild(element);

let newElement = document.createElement("section");
let currentElement = document.getElementById("elementoOndeVoceEsta");
currentElement.appendChild(newElement);

let primeiroFilhoDoFilhoDoFilho = document.createElement("section");
primeiroFilhoDoFilhoDoFilho.id = "primeiroFilhoDoFilhoDoFilho";
let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoDoFilho); */

//*https://stackoverflow.com/questions/1115310/how-can-i-add-a-class-to-a-dom-element-in-javascript*/
/* console.log(
  document.getElementById("primeiroFilhoDoFilhoDoFilho").parentElement
    .parentElement.nextElementSibling
); */

//Parte III
let grandFather = document.getElementById("paiDoPai");
let father = grandFather.children[0];
for (let i = 0; i<=grandFather.children.length; i+=1){
    if (grandFather.children[i].id !== 'pai'){
        grandFather.removeChild(grandFather.children[i])
    }
}

for (let i = 0; i<father.children.length; i+=1){
    if (father.children[i].id !== 'elementoOndeVoceEsta'){
        father.removeChild(father.children[i])
        i -= 1
    }
}


for (let i = 0; i<father.firstElementChild.children.length; i+=1){
    if (father.firstElementChild.children[i].id !== 'primeiroFilhoDoFilho'){
        father.firstElementChild.removeChild(father.firstElementChild.children[i])
        i -= 1
    }
}

