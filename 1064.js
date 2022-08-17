var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');
let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())
let D = parseFloat(lines.shift())
let E = parseFloat(lines.shift())
let F = parseFloat(lines.shift())
let G = parseFloat(lines.shift())
let arr=[A, B, C, D, E, F, G]
let avarave=0;
let count=0;
for (let i=0; i<arr.length; i++){
    if(arr[i]>0){

        avarave = avarave +arr[i];
        count++
    }
}
console.log(count + " valores positivos")
console.log((avarave / count).toPrecision(2));