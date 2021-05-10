//Object.preventExtensions
const produto = Object.preventExtensions({
        nome:"Assassin",
        preco: 1900,
        tag:"promoção",      
})
console.log("Extensível", Object.isExtensible(produto))
produto.nome = "JACK"
produto.descrição = "180kg"
delete  produto.nome
console.log(produto)

//Object.seal
const pessoa = {
    nome:"jaqueline silva",
    idade:20,
}
Object.seal(pessoa)
delete pessoa.nome
console.log(pessoa)
pessoa.nome = "Jotaro"
console.log(pessoa)
//Object.freeze