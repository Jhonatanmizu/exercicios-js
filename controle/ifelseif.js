Number.prototype.behind = function (start, end) {
  return this >= start && this <= end;
};
const printResult = function (nota) {
  if (nota.behind(9, 10)) {
    console.log("Congratulations");
  }
  else if (nota.behind(7, 8)) {
    console.log("fine");
  }
  else if (nota.behind(5, 6)) {
    console.log("be carefull");
  }else{
    console.log("Wasted");
  }
};
printResult(10);
