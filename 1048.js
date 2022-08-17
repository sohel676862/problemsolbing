var input = require("fs").readFileSync("stdin", "utf8");
var a = parseFloat(input.split(" ").shift())
console.log(a)
if(a>0.00 && a<=400.00){
    let vat=( a* 0.15)
    let salario= (a+vat).toFixed(2)
    console.log("Novo salario: " + salario)
    console.log("Reajuste ganho: " + vat.toFixed(2))
    console.log("Em percentual: 15 %")
}
else if(a>400.00 && a<=800.00){
    let vat= a* 0.12
    let salario= (a+vat).toFixed(2)
    console.log("Novo salario: " + salario)
    console.log("Reajuste ganho: " + vat.toFixed(2))
    console.log("Em percentual: 12 %")
}
else if(a>800 && a<=1200.00){
    let vat= (a* 0.10)
    let salario= (a+vat).toFixed(2)
    console.log("Novo salario: " + salario)
    console.log("Reajuste ganho: " + vat.toFixed(2))
    console.log("Em percentual: 10 %")
}
else if(a>1200 && a<=2000){
    let vat=( a* 0.07)
    let salario= (a+vat).toFixed(2)
    console.log(vat)
    console.log("Novo salario: " + salario)
    console.log("Reajuste ganho: " + vat.toFixed(2))
    console.log("Em percentual: 7 %")
}
else if(a>2000.00){
    let vat= a* 0.04
    let salario= (a+vat).toFixed(2)
    console.log("Novo salario: " + salario)
    console.log("Reajuste ganho: " + vat.toFixed(2))
    console.log("Em percentual: 4 %")
}