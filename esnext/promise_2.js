// setTimeout(function(){
//     console.log('Hi')
//     setTimeout(function(){
//         console.log('executando callback');
//     },3000
//     )
//     setTimeout(function(){
//         console.log('Opah')
//     },3000)
//Callback hell
// },  3000)
function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Ana");
      resolve('ok');
    }, tempo);
  });
}
esperarPor(3000).then(texto => console.log(texto))