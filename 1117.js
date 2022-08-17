var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let sum=0
let count=0;
for(var i=0; i<lines.length; i++){
   
    let convertNmumber=parseFloat(lines[i]);
    if(count===2){
        break;
    }
 else if(convertNmumber>0 && convertNmumber<=10){
    sum += convertNmumber;
   count++
   }

   else{
    console.log("nota invalida")
   }
}
console.log("media = "+(sum/2))