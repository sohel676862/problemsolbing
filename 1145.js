var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ")
let [first,second]=lines.map((line)=>parseInt(line))
for (let i = 1; i <=second; i = i + first) {
    let line = ""
   let slice;
    for (let j = i, k = 0; k <first; j++, k++) {

      if(second>=j ){

     line = line +j+" "

   slice=line.slice(0,-1)

        
  
      }
    }
    console.log(slice)
 
   
}
