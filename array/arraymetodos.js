const pilotos = ["Vettel", "Massa","Raikkonen","Alonso"]
pilotos.pop()//remove the last element in a array
pilotos.push("Senna")//add a element in array
console.log(pilotos)

pilotos.shift()//remove the first
console.log(pilotos)

pilotos.unshift("hamilton")//add  in the first place
console.log(pilotos)

// splice pode adicionar ou remover elementos

//adicionar
pilotos.splice(2,  0, "Bottas", "Alonso")
console.log(pilotos)
//remover
pilotos.splice(3, 1)
console.log(pilotos)

const team = pilotos.slice(2)
console.log(team)
const team2 = pilotos.slice(1, 3)
console.log(team2)