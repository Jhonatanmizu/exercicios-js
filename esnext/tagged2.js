function Real(partes, ...valores) {
  const resultado = [];
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
    resultado.push(partes[indice], valor);
  });
  return resultado.join("");
}
const preco = 20.102
const precoParcela = 12
console.log(Real `1x de ${preco} ou 2x de ${precoParcela}`)