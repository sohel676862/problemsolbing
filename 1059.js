var input = require("fs").readFileSync("stdin", "utf8");

var a= parseInt(input.split(" ").shift());
for(var i = 0; i <=a;i++){
    if(i%2===0){
        console.log(i)
    }
}