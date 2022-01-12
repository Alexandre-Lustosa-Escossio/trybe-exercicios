const sum = (...arr) => arr.reduce((acc,curr) => acc + curr)
const arr = [1,2,3,6,5,21,56,1]
console.log(sum(...arr));