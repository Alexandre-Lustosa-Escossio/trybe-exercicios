window.onload = function(){
let selectState = document.querySelector('#state')
let listOfStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Paraná', 'Paraíba', 'Pará','Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondonia', 'Roraima', 'Santa Catarina', 'Sergipe', 'São Paulo', 'Tocantins']
console.log(selectState)


for (let i=0; i<listOfStates.length; i+=1){
    let option = document.createElement('option')
    option.innerText = listOfStates[i]
    selectState.appendChild(option)
}
}   

let submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click',function(event){
    event.preventDefault()
    let body = document.querySelector('body')
    let div = document.createElement('div')
    div.id = 'consolidado'
    body.appendChild(div)
    let input = document.querySelectorAll(".user-input")
    for (data of input){
        let span = document.createElement('span')
        if(data.classList.contains('radio')){
            if(data.checked){
            span.innerText = data.value
            console.log("dentro do if",data.value)
            div.appendChild(span)
        }
        }else{
            span.innerText = data.value
            div.appendChild(span)
        }

    }
})
    