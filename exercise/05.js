function preco(a = 0, b = 0) {
    const p = a + b
    return "R$" + p.toFixed(2);   
}
console.log(preco(0.1, 0.2))