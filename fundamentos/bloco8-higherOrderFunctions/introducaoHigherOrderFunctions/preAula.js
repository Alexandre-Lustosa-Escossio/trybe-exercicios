// Ao chamar a função doingThings:
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
const wakeUp = () => console.log('Acordando!!');
const breakfast = () => console.log('Bora tomar café!!');
const sleep = () => console.log('Partiu dormir!!');
const doingThings = (func) => func()

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);