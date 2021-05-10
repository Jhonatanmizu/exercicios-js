// operador ... rest (juntar)/spread(espalhar)
// usar rest com paramentro de função

// usar spread com objeto
const funcionario = { nome:"Tania", salario:1799}
const clone = {ativo: true, ...funcionario}
console.log(clone);
// usar spread no contexto de array
const numbers = [1,2,3,4]
const fnumbers = [5,4,8,9,10,...numbers]
console.log(fnumbers);
