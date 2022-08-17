var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
var splitArray = lines.map((item) => item.split(" "));
let Inter = 0
let Gremio = 0
let Empates = 0
for (var i = 0; i < splitArray.length; i++) {

    let fisrt = splitArray[i];
    let map = fisrt.map((item) => item.split(' '))

    let converNumber1 = parseInt(map[0]);
    let converNumber2 = parseInt(map[1]);
    if (converNumber1 && converNumber2) {
        console.log('Novo grenal (1-sim 2-nao)')
    }
    if (converNumber1 > converNumber2) {
        Inter++
    }
    else if (converNumber1 < converNumber2) {
        Gremio++
    }
    else if (converNumber1 === converNumber2) {

        Empates++
    }
    else if (converNumber1 === 1) {
        continue;
    }
    else {
        break
    }

}

let add = Gremio + Inter + Empates;
console.log(add + " grenais")
console.log("Inter:" + Inter)
console.log("Gremio:" + Gremio)
console.log("Empates:"+ Empates)
if (Gremio === Inter) {
    console.log("Não houve vencedor")
}
else {
    console.log("Inter venceu mais")
}