function tratarErroELançar(erro) {
    throw new Error(";;;;;;;;;;")
    
}
function imprimirNomeGritando(obj) {
  try {  console.log(obj.name.toUpperCase() + "!!!")
} catch (e){
     tratarErroELançar(e)

     } finally {
         console.log("the end")
     }
}
const obj = { name: "Robert"};
imprimirNomeGritando(obj)