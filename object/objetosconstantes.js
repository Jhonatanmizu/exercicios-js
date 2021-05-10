/// pessoa -> 123  ->{....}
const pessoa = {
    nome:"Jack crauser"
}
pessoa.nome = " Julio"
console.log(pessoa);

//pessoa <- 456 <- {.....}
//pessoa = {nome:"June"}
//console.log(pessoa);
Object.freeze(pessoa)
pessoa.nome = "CRACK"
console.log(pessoa);