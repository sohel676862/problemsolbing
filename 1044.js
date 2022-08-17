var input = require("fs").readFileSync("stdin", "utf8");

var [a, b, ] = input.split(" ").map((line) => parseFloat(line));


    if (b % a === 0 || a%b===0) {
        console.log("Sao Multiplos")
    } else {
        console.log("Nao Sao Multiplos")
    }
