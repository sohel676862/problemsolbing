
var input = require("fs").readFileSync("stdin", "utf8");
var lines = parseInt(input.split("\n"))

for (var a=0 , i = 1,j=2,k=3; a < lines;   i=i+4,j=j+4,k=k+4,a++) {
  
console.log(i+" "+ j+" "+ k + " PUM" )
}