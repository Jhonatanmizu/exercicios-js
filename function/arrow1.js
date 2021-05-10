let dobro = function (a) {
	return 2 * a;
}

dobro = (a) => {
	return 2 * a
}
console.log(dobro(10))

dobro = a => 2 * a //retorno implícito
console.log(dobro(Math.PI))

let ola = function(){
	return "olá"
}

ola = () => "jack"
console.log(ola())