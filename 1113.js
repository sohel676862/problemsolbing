var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

var arrSplite = lines.map((item) => item.split(" "))
let st = ""
for (var i = 0; i < arrSplite.length; i++) {
    let num = arrSplite[i]
    let firstNumofInt = parseInt(num[0]);
    let secondNumofInt = parseInt(num[1]);
    if (firstNumofInt === secondNumofInt) {
        break;
    }
    if (firstNumofInt > secondNumofInt) {
        st = "Decrescente";


    } else if (firstNumofInt < secondNumofInt) {
        st = "Crescente"
    }

    console.log(st)
}