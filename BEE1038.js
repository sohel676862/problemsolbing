var input = require("fs").readFileSync("stdin", "utf8");

var line = input.split("\n")
var line1=parseInt((line.shift()))
let line2=parseInt((line.shift()))
let ar=[4.00,4.50,5.00,2.00,1.50]

let condition=line2 ? line2 : line1;
console.log(condition)

let length=(ar[line1-1]) * condition

console.log("Total: R$ " +length.toFixed(2))