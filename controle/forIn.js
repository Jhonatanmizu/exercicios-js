const notas = [7, 8 , 9, 10, 100, 15,85, 94, 75, 64,];
console.log(notas);
for (let i in notas) {
  console.log(i, notas[i]);
}
const pessoa = {
  nome: "boremia",
  idade:17,
  peso: 100 + "kg",

}
//log
for (var a in pessoa) {
  console.log(`${a} = ${pessoa[a]}`);
}
