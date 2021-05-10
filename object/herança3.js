const pai =  {
    nome:"Jack",
    corCabelo:"preto",
}

const filho = Object.create(pai)
filho.nome  = "bob"
console.log(filho.corCabelo)

const filha = Object.create(pai, {
name:{value: "jaqueline", writable:false, enumerable:true}
})
console.log(filha.name)
filha.name = "Bruna"
console.log(`A filha tem nome ${filha.name}, e cabelo de cor ${filha.corCabelo}`)
console.log(Object.keys(filha))
console.log(Object.keys(filho))

for (let key in filha){
        filha.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}
