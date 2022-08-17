var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
for (var i = 0; i < lines.length; i++) {
    let firstNumofInt = parseInt(lines[i])
    if (firstNumofInt === 2002) {
        console.log("Acesso Permitido")
        break;
    }
    else {
        console.log("Senha Invalida");

    }

}