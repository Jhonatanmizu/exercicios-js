const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("Angular", { framework: true });
console.log(tecnologias);
console.log(tecnologias.get("react").framework);
const chavesVariadas = new Map([
  [function () {}, "função"],
  [({}, "Objeto")],
  [123, "zack"],
]);
chavesVariadas.forEach((valor, chave) => {
  console.log(valor, chave);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123)
console.log(chavesVariadas.size)