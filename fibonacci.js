// function fibonacci(n) {

//     let num1=0
// let num2=1
//     let result =[]
//     for(let i=1; i<=n; i++){

//         result = num1 +num2;
//         // console.log(num1 = num2)
//           num1=num2;
//          num2=result;
 
   

//     }
// return result
// }
// console.log(`fibonacci value at position 5: ${fibonacci(5)}`)
// def Fibonacci(n): 
//     if n==1: 
//         return 0
//     elif n==2: 
//         return 1
//     else: 
//         return Fibonacci(n-1)+Fibonacci(n-2)
// print(Fibonacci(9))

function Fibonacci(n){

    if(n==1) return 0;

    else if(n==2) return 1;

    else{
        return Fibonacci(n-1) +Fibonacci(n-2)
    }
    
}
console.log(Fibonacci(9))