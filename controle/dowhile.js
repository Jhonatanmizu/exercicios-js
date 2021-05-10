function getintnumber(min, max) {
  const value = Math.random() * (max - min) - min
  return Math.floor(value);
}
let choose = 0
do {
  choose = getintnumber(0, 10);
  console.log(choose);
} while (choose <= 10)
