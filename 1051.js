var input = require("fs").readFileSync("stdin", "utf8");

var a= parseFloat(input.split(" ").shift());

if(a>4500){
    let b=a-4500;
  let text1=b*.28
  console.log(text1);
  let text2=1500* .18
  console.log(text2);
 let text3=1000*.08
  const textsum=(text1+text2+text3).toFixed(2)
  console.log("R$ " + textsum)
}
else if(a>3000 && a<=4500){

    let b=a-3000;
    let text1=b*.18;
    let text2= 1000*.08
    const textsum=(text1+text2).toFixed(2)
    console.log("R$ " + textsum)

}
else if(a>2000 && a<=3000){
let b=a-2000;
let text1=b*.08
console.log("R$ " + text1)
}

else if(a>000 && a<=2000){
    console.log("Isento")
}