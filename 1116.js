var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let slice=lines.slice(1);
var splitArray = slice.map((item)=> item.split(" "));
for(var i=0; i<splitArray.length; i++) {
 let item = splitArray[i];
 let firstNumofInterval = parseInt(item[0]);
 let secondNumofInterval = parseInt(item[1])
if(secondNumofInterval === 0) {
    console.log("divisao impossivel")
 }
else{
    let devision=(firstNumofInterval /secondNumofInterval).toFixed(1);
    console.log(devision);
}
}