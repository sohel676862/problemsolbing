var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());
let D = parseFloat(lines.shift());
let E = parseFloat(lines.shift());
let F = parseFloat(lines.shift());
let arr = [A, B, C, D, E, F];
let event = 0;
let odd = 0;
let positive = 0;
let negative = 0;
for (let i = 0; i < 5; i++) {
  if (arr[i] % 2 === 0) {
    event++;
    // console.log(arr[i]);
  }
  if (arr[i] % 2 !== 0) {
    odd++;
    // console.log(arr[i]);
  }

  if (arr[i] > 0) {
    positive++;
    
  }
  if (arr[i] < 0) {
    negative++;
    console.log(arr[i]);
  }
}
console.log(event + " valor(es) par(es)");
console.log(odd + " valor(es) impar(es)");
console.log(positive + " valor(es) positivo(s)");
console.log(negative + " valor(es) negativo(s)");
