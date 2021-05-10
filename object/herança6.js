function aula(nome, videoId){
    this.nome = nome
    this.videoId = videoId
}

const aulao = new aula("jose",123)
console.log(aulao);
const aula2 = new  aula("Bob",456)
console.log(aula2)
//simulando  o new
function novo(f, ...params){
    const obj = {
    }
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj

}
const aula4 = novo(aula, "Bem vindo",  777)
const aula5 = novo(aula, "Olá", 666)
console.log(aula4, aula5)
