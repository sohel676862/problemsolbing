var input = require("fs").readFileSync("stdin", "utf8");

var a= parseInt(input.split(" ").shift());
let ob={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",
7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}

console.log(ob[a])
