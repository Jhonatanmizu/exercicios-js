const produtos = [
    {nome:"Notebook", preco:2000, fragil:true},
    {nome:"Ipad Pro", preco:4500, fragil:true},
    {nome:"Copo de vidro", preco:12.49, fragil:true},
    {nome:"Copo de plástico", preco:10, fragil:false},

]
/*console.log(produtos.filter(function(p) {
    return p.fragil !== true
}))*/
const fragil = function fragil(produto) {
    return produto.fragil === true    
}
const caro = function caro(produto) {
    return produto.preco >= 500
}
console.log(produtos.filter(caro).filter(fragil))