// tagged template - processa a template dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores);
    return `outra coisa`
}
const aluno = "Gui"
const situação = 'Aprovado'
console.log(tag`${aluno} está ${situação}`);