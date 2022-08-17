var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");
var arrSlice = lines.slice(1)
let rabit = 0;
let rat = 0;
let frog = 0;
let total = 0
let test = arrSlice.map((item) => item.split(" "))
for (let i = 0; i < test.length; i++) {
   let num = test[i]
   let numParseInt = parseInt(num[0])
   let numOfChaer = num[1]
   total += numParseInt

   if (numOfChaer.includes("C")) {
      rabit += numParseInt
   }
   if (numOfChaer.includes("R")) {
      rat += numParseInt
   }
   if (numOfChaer.includes("S")) {
      frog += numParseInt
   }

}
console.log(`Total: ${total} cobaias`)
console.log(`Total de coelhos: ${rabit}`)
console.log(`Total de ratos: ${rat}`)
console.log(`Total de sapos: ${frog}`)
console.log(`Percentual de coelhos: ${((rabit / total) * 100).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((rat / total) * 100).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((frog / total) * 100).toFixed(2)} %`);



