var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let A = parseFloat(lines.shift());

for (let i = 1; i <=A; i++) { 

    if(i %2===0){
        console.log(i + "^"+ 2+ " = " + i*i );
 n
    }
}