//1,2,3,4,5,6,7,8,9=1
// const fibonaki=(n)=>{

// const { indexOf } = require("lodash")

//     if(n<=0){
//         return 1
//     }

//     return  n * fibonaki()
// }

// const result = fibonaki()(5)
// console.log(result)




// const fibonaki =(n)=>{
//   let num1=0
// let num2=1
//     let result =[]
//     for(let i=1; i<=n; i++){

//         result = num1 +num2;
//         // console.log(num1 = num2)
//           num1=num2;
//          num2=result;
 
   

//     }

//    return result
// }

//     const result1 = fibonaki(5)
// console.log(result1)


// const fibonacci =(n)=>{

//     let fibo=[0,1]
//     // fibo.push(fibo[2-2] + fibo[2 -1])
//     // fibo.push(fibo[3-2] + fibo[3 -1])

//     for(let i=2; i<=n; i++){
//     //   console.log(i)
//       fibo.push(fibo[i-2] + fibo[i -1])
   

//     }
  
//     return fibo
// }


//       const result=  fibonacci(5)
//       console.log(result)


     
// function returns the Fibonacci number
function fib(n) {
if (n <= 1)
 {
  return n;
 }
return fib(n-1) + fib(n-2);
}

const result= fib(10)
console.log(result)