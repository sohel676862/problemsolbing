
var input = require("fs").readFileSync("stdin", "utf8");
var lines = parseInt(input.split("\n"))

for (var a=1 , j=1,k=1; a <= lines; a++, j=a*a,k=a*j) {
  
console.log( a,j,k)


}