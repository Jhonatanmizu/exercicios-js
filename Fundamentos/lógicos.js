function compras(trabalho1, trabalho2) {
  const comprarSorv = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  const comprarTv32 = trabalho1 != trabalho2;
  //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
  const mantersaudavel = !comprarSorv;
    return { comprarSorv, comprarTv50, comprarTv32, mantersaudavel}
}
console.log(compras(true, false));