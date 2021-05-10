console.log(typeof Array, typeof new Array, typeof [])
let aprovados = new Array("Carlos","Jaqueline","Joana","jack")
aprovados[0] = "Julio"
console.log(aprovados)
console.log(aprovados.length)
aprovados[9]= "Bruna"
console.log(aprovados)
console.log(aprovados[5] === undefined)
console.log(aprovados.sort())
delete aprovados[1]
aprovados.push("cão")
console.log(aprovados[1])
aprovados.splice(1, 2)
console.log(aprovados)
