///Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
  console.log("o evento ocorreu!");
}
///arrow
document.getElementsByTagName('body')[0].onclick = (e) => {console.log("X+Y");}
