function area(base, altura) {
  const area = base * altura
  if (area >50){
    console.log(`Valor acima do permitido = ${area}m2`);
  }
  else{
    return area
  }
}
area(10, 10)
