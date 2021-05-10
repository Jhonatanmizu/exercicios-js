//First class object
//High order function

//criar de forma literal
function code() {
}
//armazena em uma variável
const fun2 = function() {
}
//armazenar em um array
const array = [function(a,b){
  return a + b
}, fun2]
console.log(array[0](2, 3));
//armazenar em um atributo de object
const obj = {
}
obj.falar = function(a, b){
  return a + b
}
console.log(obj.falar(10, 50))
//Passar função como param
function run(fun){
  fun()
}
run(function() {
  console.log(("Executando..."));
})
// Uma função pode retornar/conter uma função
function soma(a, b) {
  return function(c){
    console.log(a + b + c);
  }
}
soma(3, 7)(17)
const soma2 = soma(3, 7)
soma2(40)
