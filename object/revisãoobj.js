//Coleção dinâmica chave/valor
const produto = new Object
produto.name = "Jack"
produto["Marca"] = "Samsumg"
produto.preco = 200
console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    name:"carro",
    marca: "FIAT",
    valor: 3000,
    proprietário:{
            nome: "Raul",
            idade: 20,
            endereço: {

            }
    }
}