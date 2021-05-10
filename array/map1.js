//const distros = ["kali", "debian","mint","ubuntu","popos","fedora"]
const numbers = [1,2,3,4,5]

// for com propósito
let resultado = numbers.map(function(e){
    return e**2
})
console.log(resultado)
// 
const soma10 = e =>  e + 10
const triplo = e => e * 3
const real = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

console.log(numbers.map(real))

console.log(numbers.map(triplo))

console.log(numbers.map(soma10))

resultado = numbers.map(soma10).map(real)
console.log(resultado)