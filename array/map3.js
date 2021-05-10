const carrinho =[
    '{"nome": "Borracha", "Preco": 3.45}',
    '{"nome": "Caderno", "Preco": 10}',
    '{"nome": "Kit lápis", "Preco": 14}',
    '{"nome": "Caneta", "Preco": 10}'
]
Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index],index, this))
        
    }
    return newArray
}
const paraObj = json => JSON.parse(json)


const apenasPreco = produto => produto.Preco

const resultado = carrinho.map2(paraObj).map2(apenasPreco)

console.log(carrinho.map(paraObj).map(apenasPreco))