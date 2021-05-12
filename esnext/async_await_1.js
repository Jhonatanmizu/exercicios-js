function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo);
  });
}
// esperarPor()
// .then(()=> console.log("executando promise 1"))
// .then(esperarPor)
// .then(()=> console.log("executando promise 2"))
// .then(esperarPor)
// .then(()=> console.log("executando promise 3"))
function retornaValor(){
  return new Promise(resolve =>{
    setTimeout(()=> resolve(10), 5000)
  })
}
async function executar(){
let valor = await retornaValor()
await esperarPor(1500)
console.log(`async ${valor}`)
await esperarPor(1500)
console.log(`async ${valor + 1}....`)
await esperarPor(1500)
console.log(`async ${valor + 2}`)
return valor + 3
}


async function executarDeVerdade(){
const resposta = await executar()
console.log(resposta)
}

executarDeVerdade()
