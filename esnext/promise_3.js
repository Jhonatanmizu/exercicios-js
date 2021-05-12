function gerarN(min , max){
    if(min > max){
      [max, min] = [min, max]
      const [x, y ]  = a
    }
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}
gerarN(10, 30)
.then(num => num * 10)
.then(num10 => `o número é ${num10  }`)
.then(console.log)