var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
var arrSplite = lines.map((item) => item.split(" "))
for (var i = 0; i < arrSplite.length; i++) {
    let num = arrSplite[i];
    let sortNumber = num.sort((a, b) => a - b);
    let sum = 0;
    let numOfFirstIndex = parseInt(sortNumber[0])
    let numOfSecondIndex = parseInt(sortNumber[1]);
   
let num2=""
if(numOfFirstIndex >0 && numOfSecondIndex >0) {
    for (let j = numOfFirstIndex; j <= numOfSecondIndex; j++) {
     num2= num2+j+" ";
  sum= sum + j
    }
    console.log(num2 + "Sum="+sum)
}


}       