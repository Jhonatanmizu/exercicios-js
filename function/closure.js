//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular as variável externas à função

//contexto léxico
const x = "global"
function fora() {
    const x = "local"
    function dentro(){
        return x
    }
    return dentro
}
const func = fora()
console.log(func());