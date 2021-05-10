const sum = (a, b) =>{
  return a + b
}
const printsum = function(a, b, operation = sum){
  console.log(operation(a, b));
}
printsum(3, 30)
printsum(3, 10, sum)
printsum(4, 20,function (x, y) {
  return x - y
})
const person = {
  talk(){
    console.log("Hello mother\n:");
  }
}
person.talk()
