//função sem retorno
function getprice(a, b){
console.log(a + b)
}
getprice(10, 5)
getprice(2)
getprice()
//com retorno
function soma(a, b = 0){
    return a + b;
}
console.log(soma(2, 3));
console.log(soma(2));