var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let a=parseInt(lines[0])
let b=parseInt(lines[1])
let bignumber;
let smallNumber;
if(a>b) {
bignumber=a;
smallNumber=b
}
else{
  bignumber=b;
  smallNumber=a
}

let sum=0
for (let i = smallNumber; i <= bignumber; i++) {
  if (i % 13 === 0) {
  } else {
    sum += i;
  }
}
console.log(sum);
