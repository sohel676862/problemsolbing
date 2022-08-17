var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
var splitArray = lines.map((item)=> item.split(" "));

for(var i=0; i<splitArray.length; i++){
  let num=splitArray[i]
  let firstNumofInt= parseInt(num[0]);
  let secondNumofInt= parseInt(num[1]);
  if(firstNumofInt ===0 || secondNumofInt===0){
    break;
}
if(firstNumofInt >0 && secondNumofInt >0){
    console.log("primeiro")
}
if(firstNumofInt>0 && secondNumofInt<0){
    console.log("quarto")
}
if(firstNumofInt<0 && secondNumofInt<0){
console.log("terceiro")
}
if(firstNumofInt<0 && secondNumofInt>0){
console.log("segundo")
}
 
}