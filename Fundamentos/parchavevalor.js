const saudação = "Olá" /// contexto léxico, onde foi definido.

function exec(){
	const saudação = "falaa" /// outro contexto léxico
	return saudação
}
//console.log(exec())

///Objetos são grupos aninhados de pares nome/valor
const cliente = {
	nome: "Jotaro",
	idade: 24,
	peso: 90,
	endereço: {
		logradouro: "Rua  muito legal",
		número: 123,

	}
}
console.log(cliente)
console.log(saudação)
console.log(exec())