var input = require("fs").readFileSync("stdin", "utf8");

var [a,b,c,d,e,f]= (input.split(" ").map((item)=> parseInt(item)))

let arr=[a,b,c,d,e,f]
console.log(arr)

let positive=0;
for(var i=0; i<arr.length; i++){
 if(arr[i]>0){
    positive++
 }
}
console.log(positive)