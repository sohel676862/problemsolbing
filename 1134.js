var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
var arr = lines.map((line) => parseInt(line));
let Alcool = 0
let Gasolina = 0;
let Diesel = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
        Alcool++
    }
    else if (arr[i] === 2) {
        Gasolina++
    }
    else if (arr[i] === 3) {
        Diesel++
    }
    else if (arr[i] === 4) {
        break;
    }
    else {
        continue;
    }

}
console.log("MUITO OBRIGADO");
console.log("Alcool: " + Alcool);
console.log("Gasolina: " + Gasolina);
console.log("Diesel: " + Diesel)