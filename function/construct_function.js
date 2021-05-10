function car(speedMax = 200, delta = 5) {
//atributo privado
let actualspeed = 0
//método público
this.acceleration = function() {
 if (actualspeed + delta <= speedMax) {
  actualspeed += delta   
 }else{
     actualspeed = speedMax
 }
}
///método público
this.getactualspeed = function(){
    return actualspeed
}
}
const uno = new car
uno.acceleration()
console.log(uno.getactualspeed());

const ferrari = new car(505, 50)
ferrari.acceleration()
ferrari.acceleration()
ferrari.acceleration()
console.log(ferrari.getactualspeed());