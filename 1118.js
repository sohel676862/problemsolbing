var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let count = 0;
let sum = 0;
for (var i = 0; i < lines.length; i++) {
    let nums = parseFloat(lines[i]);
    if (count >= 2 && parseInt(nums) === 2) {
        console.log("novo calculo (1-sim 2-nao)")
        break
    }

    else if (parseInt(lines[i + 1]) === 1 || nums === 1) {
        console.log("novo calculo (1-sim 2-nao)")
        count = 0;
        sum = 0;
        continue;
    }
    else if (nums > 0 && nums <= 10) {
        sum += nums;

        count++
        if (count >= 2) {
            console.log("media = " + (sum / 2).toFixed(2));
           
            sum = 0;
        }


    }
    else {
        console.log("nota invalida")

    }

}
