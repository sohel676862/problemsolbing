var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

for (var i = 0; i < lines.length; i++) {
    let firstLine = parseInt(lines[i])
    let num = 0
    let slice=0;
    if (firstLine === 0) {
        break;
    }
    else {
        for (var j = 1; j <= firstLine; j++) {
            if (firstLine === 0) {
                break;
            }
            else {
                num = num + j + " "
                slice= num.slice(0, -1)
            }
        }
    }


      console.log(slice)

}