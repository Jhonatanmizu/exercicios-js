const pessoa = {
	name: "Jack",
	idade: 20,
	altura: 1.80,
	peso:60,
	endereco: {
		logradouro:"Rua marechal floriano ",
		number: 1000,

	},
}
/*

const altura = pessoa.altura * pessoa.altura
console.log(altura / pessoa.peso)
console.log(pessoa.altura * pessoa.altura / pessoa.peso)*/

///Destructuring
const {name, idade} = pessoa
console.log(name, idade)

const {name: n , altura: h} = pessoa
console.log(n, h)

const { endereco: {logradouro, number} } = pessoa
console.log(logradouro, number)