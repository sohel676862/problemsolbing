var input = require("fs").readFileSync("stdin", "utf8");
var [a, b] = input.split(" ").map((line) => parseFloat(line));
if(a===b){
    console.log("O JOGO DUROU 24 HORA(S)")
}
else if(a>b){
let hour=(b+24)-a
console.log("O JOGO DUROU" + hour+ "HORA(S)");

}
else if(a<b){
    let hour=b-a
    console.log({hour})
    console.log("O JOGO DUROU" + hour + "HORA(S)")
    
}