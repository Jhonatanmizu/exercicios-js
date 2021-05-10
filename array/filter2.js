Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            newArray.push(this[index])
        }
        
    }
    return newArray 
}
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
console.log(produtos.filter2(caro).filter2(fragil))