
var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');
let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())
let D = parseFloat(lines.shift())
let E = parseFloat(lines.shift())
let F = parseFloat(lines.shift())
let G = parseFloat(lines.shift())
let H = parseFloat(lines.shift())
console.log(F,B)

if( H>=D){
    let second=H-D;
    if(G>=C){
  
        let minute=G-C;
        console.log({minute});
        if(F>=B){
            console.log("minute");
        }
    }
   
    if(G<C){
        let hour=G+ 24 -C
    }

}