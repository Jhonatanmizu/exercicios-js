const alunos = [
    {nome:"Carla", nota:10, bolsista:true},
    {nome:"Ana", nota:5, bolsista:true},
    {nome:"Bruna",  nota: 7, bolsista:false}
]
const resultado = alunos.map(function (alunos) {
    return alunos.nota 
    
}).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
    
})
console.log(resultado)