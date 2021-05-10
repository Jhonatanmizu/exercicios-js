function trian(l1 = 0, l2 =0, l3 =0) {
  if (l1 === l2 && l2 == l3) {
    console.log("equilatero");
  }
  else if (l1 == l2 && l1 != l3 || l2 == l3 || l1 == l3 ){
    console.log("isoceles");
  }
  else{
    console.log("escaleno");
  }

}
trian()
trian(20,20)
trian(10, 50)
