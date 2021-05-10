//Armazenando  uma função em uma variável
const soma = function(a, b){
return a + b;
}
console.log(soma(2, 10));
//Armazenando uma função arrow
const sub = (a, b) => {
return a + b;
}
console.log(sub(10, 10));
//retorno implícito
const multiplicacao = (a, b) => a * b
console.log(multiplicacao(2, 10));
const show = a => console.log(a);
show("legal")