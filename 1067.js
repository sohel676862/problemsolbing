var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let sum=0;

for (let i = B+1; i <A; i++) {
 
    if(i % 2 !==0){
        sum= sum +i
    }
}
console.log(sum);