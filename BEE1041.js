var input = require('fs').readFileSync('stdin', 'utf8');

var line = input.split("\n");
var x = parseFloat(line.shift());
var y = parseFloat(line.shift());

if (x !== 0.0 && y !== 0.0) {
    if (x > 0.0 && y > 0.0) {
        console.log("Q1");
    } else if (x > 0.0 && y < 0.0) {
        console.log("Q4");
    } else if (x < 0.0 && y > 0.0) {
        console.log("Q2");
    } else {
        console.log("Q3");
    }
} else if ((x === 0.0 && y > 0.0) || (x === 0.0 && y < 0.0)) {
    console.log("Eixo Y");
} else if ((x > 0.0 && y === 0.0) || (x < 0.0 && y === 0.0)) {
    console.log("Eixo X");
} else {
    console.log("Origem");
}