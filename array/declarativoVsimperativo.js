const alunos = [
    {nome:"Jaque", nota:7.9},
    {nome:"Bruna", nota: 9.2}
]
//imperativo
let total1 = 0
for (let index = 0; index < alunos.length; index++) {
    total1 += alunos[index].nota
}
console.log(total1 / alunos.length)

//declarativo
const getNota = function (aluno) {
    return aluno.nota
}
const soma = (total1, atual) => total1 + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2)