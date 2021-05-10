console.log('01)', '1' === 1)
console.log('02)', '1' == 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)
console.log('05)', 3 >= 3)
console.log('06)',  0 <= 3)
console.log('07)', 10 > 3)

const data = new Date(0)
const data2 = new Date(0)
console.log(data === data2);
console.log(data.getTime() === data2.getTime());
console.log('12)', undefined == null);