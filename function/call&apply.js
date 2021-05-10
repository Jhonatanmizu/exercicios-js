function getprice(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.price * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
  nome: "notebook",
  price: 4500,
  desc: 0.1,
  getprice
}
global.price = 20;
global.desc = 100;
console.log(produto.getprice());

const car = {price: 15000, desc:0.50}
console.log(getprice.call(car));
console.log(getprice.apply(car));

console.log(getprice.call(car, 0.20, "R$"));
console.log(getprice.apply(car, [0.10, "R$"]));
