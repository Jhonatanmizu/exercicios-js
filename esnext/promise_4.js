function gerarN(min , max, tempo){
    if(min > max){
      [max, min] = [min, max]
      const [x, y ]  = a
    }
    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}
function gerarVariosNumeros(){
    return Promise.all([
        gerarN(1, 60, 1000),
        gerarN(1, 60, 500),
        gerarN(1, 60, 250),
        gerarN(1, 60, 125),
    ])
}
console.time('promise')
gerarVariosNumeros()
.then(numeros => console.log(numeros))
.then(()=>{
    console.timeLog('promise')
    console.timeEnd('promise')

})