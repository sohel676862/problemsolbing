var input = require("fs").readFileSync("stdin", "utf8");

var [a, b, c] = input.split(" ").map((line) => parseInt(line));
let i = a;
let j = b;
let k = c;
let temp;
if (a > b) {
  temp = a;
  a = b;
  b = temp;
}
if (a > c) {
  temp = a;
  a = c;
  c = temp;
}
if (b > c) {
  temp = b;
  b = c;
  c = temp;
}

console.log(a);
console.log(b);
console.log(c);
console.log("")
console.log(i);
console.log(j)
console.log(k)
