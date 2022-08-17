let s = "acaba"
let b = s.split("");
let c = b.length - 1;
let vowel = ["a", "e", "i", "o", "u"]

//   if((b[0] ===  "a" || b[0] ===  "e" || b[0] === "i" ||  b[0] ==="o" ||"u") === (b[c] === "a" || b[c] ===  "e" || b[c] === "i" || b[c] === "o" || b[c] ==="u")){
//   console.log("true")
//   }
//   else{
// console.log("false")
//   }   
let re = true
for (let i = 0; i < vowel.length; i++) {
    if ((b[0] === vowel[i] && (b[c] === vowel[i] && b[0] === b[c]))) {
        re = true;
        break
    }
    else {
        re = false
    }

}
console.log(re)