const printResult = function(note) {
  switch (Math.floor(note)) {
    case 10:
    case 9:
    console.log("Excelent");
    break;
    case 8:
    case 7:
    console.log("Good");
    break;
    case 6:
    case 5:
    console.log("Bad notice u failed");
    break;
    default:
    console.log("Invalid result");
  }
}
printResult(3)
