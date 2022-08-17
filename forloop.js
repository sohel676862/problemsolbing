var input = require("fs").readFileSync("stdin", "utf8");

var line = input.split("\n")
let a = line[0].split(" ")

if (a >= 0 && a <= 25.0000) {
    console.log("Intervalo [0,25]")
} else if (a >= 25.0001 && a <= 50.0000000) {
    console.log("Intervalo [25,50]")
} else if (a >= 50.00000001 && a <= 75.0000000) {
    console.log("Intervalo [50,75]")
} else if (a >= 75.00000001 && a <= 100.0000000) {
    console.log("Intervalo [75,100]")
} else {
    console.log("Fora de intervalo")
}