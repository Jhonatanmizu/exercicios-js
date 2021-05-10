console.log(Math.ceil(64.5))
const objeto1 = {}
objeto1.nome = "zack"
console.log(objeto1)

function obj(nome){
  this.nome = nome
}
const obj2 = new obj("cadeira")
const obj3 = new obj("mesa")
console.log(obj2.nome, obj3.nome);
