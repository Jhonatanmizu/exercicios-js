const fabricantes = ["Mercedes","Ferrari","Porsche"]
function print(name, indice) {
  console.log(`${indice + 1}. ${name}`);

}
fabricantes.forEach(print)
fabricantes.forEach(function(fabricantes){
  console.log(fabricantes);
})
 
