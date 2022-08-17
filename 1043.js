var input = require("fs").readFileSync("stdin", "utf8");

var [a, b, c] = input.split(" ").map((line) => parseFloat(line));


if(b+c>a && a+b>c && a+c>b){
   let area=(a+b+c)
   console.log("Perimetro = " + area.toFixed(1))
}
else{

    let area=((a+b)*c)/2
    console.log("Area = " + area.toFixed(1))
}