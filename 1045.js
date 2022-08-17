var input = require("fs").readFileSync("stdin", "utf8");
var [a, b, c] = input.split(" ").map((line) => parseFloat(line));
let arr=[a,b,c]
let [i,j,k]=arr.sort((a,b)=>(b-a)).map((line)=>parseFloat(line))
console.log(i,j,k)


let d = i*i
let e = j*j
let f = k*k
console.log(d, e, f);
if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
  
}
else{
    if (d === e + f) {
        console.log(" TRIANGULO RETANGULO");
      }
      if (d > e + f) {
        console.log("TRIANGULO OBTUSANGULO");
      }
      if (d < e + f) {
        console.log("TRIANGULO ACUTANGULO");
      }
      if (a === b && b === c && c == a) {
        console.log("TRIANGULO EQUILATERO");
      }
      if (a + b === c && c + b === a && a + c === b) {
        console.log("TRIANGULO ISOSCELES");
      }
  }

