//Usando a notação literal
const pessoa = {
}
//Object in js
const mochila = new Object
console.log(mochila);
console.log(pessoa);
//Funções construtoras
function creed(name,preco, desc){
    this.name = name
    this.getprecocomdesconto = () =>{
        return preco * (1 - desc)
    }
}
const brun = new creed("Chicago",700,10)
console.log(brun.getprecocomdesconto());

//função  factory
function criarfuncionário(nome, salariobase,faltas){
    return{
        nome,
        salariobase,
        faltas,
        getsalario(){
            return (salariobase/30) * (30-faltas)
        }
    }
}
console.log(criarfuncionário("jack", 3000, 10))
const carloas = criarfuncionário("carlos",1100,5)
console.log(carloas.getsalario());
///Object.create
const filha = Object.create(null)
filha.nome = "ana"
console.log(filha);
//uma função famosa em js que retorna um objeto
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info);