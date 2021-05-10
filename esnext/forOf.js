for (let indice of "Coder") {
  console.log(indice);
}
const assuntosECMA = ["Map", "Set", "Promise"];

for (let i in assuntosECMA) {
  console.log(i);
}

for (let assunto of assuntosECMA) {
  console.log(assunto);
}

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);
console.log(assuntosMap);
for (assunto of assuntosMap) {
  console.log(assunto);
}
for (let chave of assuntosMap.keys()) {
  console.log(chave);
}
for (let valor of assuntosMap.values()) {
  console.log(valor);
}
for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}
const s = new Set(["a", "b", "c"]);
for (let i of s) {
  console.log(i);
}
