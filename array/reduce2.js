const alunos = [
    {nome:"Carla", nota:10, bolsista:true},
    {nome:"Ana", nota:5, bolsista:true},
    {nome:"Bruna",  nota: 7, bolsista:false}
]
//Desafio todos os alunos é bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map( a =>  a.bolsista).reduce(todosBolsistas))
//Desafio algum aluno é bolsista?
const algum = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algum))           