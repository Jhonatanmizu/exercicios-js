const notas = [10, 5, 6, 9, 8, 7, 3, 2];
//sem callback
let Nbaixas =[]
for (var i in notas) {
  if (notas[i] < 7){
    Nbaixas.push(notas[i])
  }

}
console.log(Nbaixas);
///com callback
 Nbaixas = notas.filter(function (nota) {
return nota < 7
})
console.log(Nbaixas);

let Nbaixas2 = notas.filter( notas => notas < 7)
console.log(Nbaixas2);
