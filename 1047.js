var input = require("fs").readFileSync("stdin", "utf8");
var [a, b,c,d] = input.split(" ").map((line) => parseFloat(line));


 if(b>d){
 let minute=(d+60)-b;
 c=(c-1);
if(c<a){
    let hour=(c+24)-a
    console.log(`O JOGO DUROU ${hour} HORA(S) E ${minute} MINUTO(S)`)
}
else{
    let hour=c-a
    console.log(`O JOGO DUROU ${hour} HORA(S) E ${minute} MINUTO(S)`)
}
 }

else if(a===c && b===d){
console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S")
}
else if(d>b){
    let minute=d-b;
    if(c<a){
        let hour=(c+24)-a
        console.log(`O JOGO DUROU ${hour} HORA(S) E ${minute} MINUTO(S)`)
    }
    else{
        let hour=c-a
        console.log(`O JOGO DUROU ${hour} HORA(S) E ${minute} MINUTO(S)`)
    }
}


 
 