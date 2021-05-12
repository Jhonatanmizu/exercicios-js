function gerarN(min , max, numerosP){
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosP.includes(aleatorio)){
          reject('Número repetido')
        }else{
          resolve(aleatorio)

        }
    })
}
async function gerarMegaSena(qtdNumeros, tentativas = 0){
  try{  
    const numeros = []
    for(let _ of Array(qtdNumeros).fill()){
    numeros.push(await  gerarN(1,60, numeros))
    }
    return numeros
    
  }catch(e){
    if(tentativas > 10){
     throw "Not working"
    }
    gerarMegaSena(qtdNumeros , tentativas + 1)
  }
}
gerarMegaSena(15)
.then(console.log)
.catch(console.log)

// gerarN(1,5,[3,4,7])
// .then(console.log)
// .catch(console.log)
