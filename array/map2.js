const carrinho =[
    '{"nome": "Borracha", "Preco": 3.45}',
    '{"nome": "Caderno", "Preco": 10}',
    '{"nome": "Kit lápis", "Preco": 14}',
    '{"nome": "Caneta", "Preco": 10}'
]
const paraObj = json => JSON.parse(json)


const apenasPreco = produto => produto.Preco

const resultado = carrinho.map(paraObj).map(apenasPreco)

console.log(carrinho.map(paraObj).map(apenasPreco))