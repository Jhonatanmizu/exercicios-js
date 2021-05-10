function falarDepoisde(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}
falarDepoisde(3, "Opah")
  .then(frase => frase.concat("!"))
  .then(outrafrase => console.log(outrafrase));
