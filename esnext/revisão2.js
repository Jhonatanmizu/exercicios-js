// arrow function
const soma = (a, b) => a + b
console.log(soma(10,2))
// arrow function (this)
const lexico1 = () => console.log(this === exports)
lexico1()
const lexico2 = lexico1.bind({})
console.log(lexico2())
// Paramentros default
function idade(idade = 10){
    return idade
}
console.log(idade())

// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n  => total += n)
    return total
}
console.log(total(1,3,4,5))
