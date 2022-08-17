const { text } = require("stream/consumers")

let arr=[1,2,3,4,5,5]
let value=10;

function test(arr){
for(let i=0;i<arr.length;i++){
let reminder= value - arr[i]
    for(let j=i+1; j<arr.length;j++){
        let arr1=arr[i];
        let arr2=arr[j]
 if(reminder ===arr2){
    console.log(i,j)
 }

     }
    }

}


test(arr)