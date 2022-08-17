var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let a=parseInt(lines[0])
let b=parseInt(lines[1])
let big=0;
let small=0
if(a>b){
    big=a
    small=b

}
else{
    big=b
    small=a
}
for (let i=small+1; i<big; i++){
if(i %5 ===2){
    console.log(i)
}
else if(i%5===3){
console.log(i)
}
}