// EXEMPLO FOR DENTRO DE FOR
let qtd = 10;
let ingredientes = ["queijo", "presunto", "maionese","calabresa"];
let sacola = [];
for (let index = 0; index < ingredientes.length; index += 1) {
  //console.log('exectuou fora: ', index)

  let pao = [];

    for (let secondIndex = index; secondIndex <= ingredientes.length -1; secondIndex += 1){
        
        pao.push(ingredientes[secondIndex]);
    }
sacola.push(pao);

}
console.log(sacola)
