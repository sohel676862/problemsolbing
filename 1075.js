var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let A = parseFloat(lines.shift());
for (let i = 1; i < 100; i++) {

    if (i % A === 2) {
        console.log(i);

    }
}